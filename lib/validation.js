const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT_FIELD_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;

// Elimina saltos de linea y caracteres de control de campos de una sola
// linea (nombre, correo, asunto...) para que no puedan inyectar cabeceras
// adicionales al ir directo al "subject" del correo enviado via Brevo.
function normalizeLine(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t\x00-\x1f]/g, " ").trim();
}

// El mensaje del formulario si puede tener saltos de linea legitimos; solo
// se recortan espacios en los extremos.
function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(body) {
  const errors = [];

  const nombre = normalizeLine(body?.nombre);
  const correo = normalizeLine(body?.correo);
  const empresa = normalizeLine(body?.empresa);
  const mensaje = normalizeText(body?.mensaje);
  const servicio = normalizeLine(body?.servicio);
  const servicioSlug = normalizeLine(body?.servicioSlug);
  const cargo = normalizeLine(body?.cargo);
  const telefono = normalizeLine(body?.telefono);

  if (!nombre || nombre.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("nombre");
  }

  if (!correo || correo.length > MAX_SHORT_FIELD_LENGTH || !EMAIL_REGEX.test(correo)) {
    errors.push("correo");
  }

  if (!empresa || empresa.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("empresa");
  }

  if (mensaje.length > MAX_MESSAGE_LENGTH) {
    errors.push("mensaje");
  }

  if (!servicio || servicio.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("servicio");
  }

  if (servicioSlug.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("servicioSlug");
  }

  if (cargo.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("cargo");
  }

  if (telefono.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("telefono");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: { nombre, correo, empresa, mensaje, servicio, servicioSlug, cargo, telefono },
  };
}
