import { getSolutionBySlug } from "@/data/solutions-data";
import {
  buildServiceRequestEmail,
  buildLeadNotificationEmail,
} from "@/lib/email-templates";
import { validateContactPayload } from "@/lib/validation";

const BREVO_API_URL = "https://api.brevo.com/v3";

async function sendEmail(apiKey, payload) {
  return fetch(`${BREVO_API_URL}/smtp/email`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "El servicio de correo no esta configurado todavia." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const promos = Boolean(body?.promos);

  const { valid, errors, data } = validateContactPayload(body);
  if (!valid) {
    return Response.json(
      { error: "Faltan campos obligatorios o tienen un formato invalido.", campos: errors },
      { status: 400 }
    );
  }
  const { nombre, correo, empresa, mensaje, servicio, servicioSlug, cargo, telefono } = data;

  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Spectrum";
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || "contacto@spectrumt.co";
  const infoListId = process.env.BREVO_LIST_ID_INFO;
  const boletinListId = process.env.BREVO_LIST_ID_BOLETIN;

  if (!senderEmail) {
    return Response.json(
      {
        error:
          "Falta configurar el correo remitente (BREVO_SENDER_EMAIL) en el servidor.",
      },
      { status: 500 }
    );
  }

  // 1. Notificación interna para el equipo comercial.
  const notificationEmail = await sendEmail(apiKey, {
    sender: { email: senderEmail, name: senderName },
    to: [{ email: notifyTo }],
    replyTo: { email: correo, name: nombre },
    subject: `Solicitud de información - ${servicio}`,
    htmlContent: buildLeadNotificationEmail({
      nombre,
      correo,
      empresa,
      cargo,
      telefono,
      servicio,
      mensaje,
      promos,
    }),
  });

  if (!notificationEmail.ok) {
    const detail = await notificationEmail.text();
    return Response.json(
      { error: "No se pudo enviar la notificación.", detail },
      { status: 502 }
    );
  }

  // 2. Correo de confirmación al usuario, con contenido específico del servicio.
  const solution = servicioSlug ? getSolutionBySlug(servicioSlug) : null;
  if (solution) {
    const confirmationEmail = await sendEmail(apiKey, {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: correo, name: nombre }],
      subject: `Gracias por tu interés en ${solution.title}`,
      htmlContent: buildServiceRequestEmail({ solution, nombre }),
    });

    if (!confirmationEmail.ok) {
      const detail = await confirmationEmail.text();
      console.error("Error enviando confirmación al usuario:", detail);
    }
  }

  // 3. Alta/actualización del contacto en las listas de Brevo.
  const listIds = [];
  if (infoListId) listIds.push(Number(infoListId));
  if (promos && boletinListId) listIds.push(Number(boletinListId));

  if (listIds.length > 0) {
    const contactPayload = {
      email: correo,
      attributes: {
        NOMBRE: nombre,
        EMPRESA: empresa,
        TELEFONO: telefono || "",
        CARGO: cargo || "",
      },
      updateEnabled: true,
      listIds,
    };

    const contactResponse = await fetch(`${BREVO_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(contactPayload),
    });

    if (!contactResponse.ok && contactResponse.status !== 400) {
      const detail = await contactResponse.text();
      console.error("Brevo contact error:", detail);
    } else if (contactResponse.status === 400) {
      // El contacto ya existe: actualizamos sus listas explicitamente.
      await fetch(
        `${BREVO_API_URL}/contacts/${encodeURIComponent(correo)}`,
        {
          method: "PUT",
          headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            attributes: contactPayload.attributes,
            listIds,
          }),
        }
      );
    }
  }

  return Response.json({ ok: true });
}
