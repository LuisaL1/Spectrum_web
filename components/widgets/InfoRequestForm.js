"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon } from "../icons";

export default function InfoRequestForm({ serviceName, serviceSlug }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    setSubmitted(false);
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setError(null);

    const data = new FormData(event.target);
    const payload = {
      nombre: data.get("nombre"),
      correo: data.get("correo"),
      empresa: data.get("empresa"),
      cargo: data.get("cargo"),
      telefono: data.get("telefono"),
      mensaje: data.get("mensaje"),
      servicio: serviceName,
      servicioSlug: serviceSlug,
      promos: Boolean(data.get("promos")),
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "request-failed");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err.message && err.message !== "request-failed"
          ? err.message
          : "No pudimos enviar su solicitud. Intente de nuevo o escríbanos a contacto@spectrumt.co."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button type="button" className="btn btn-outline" onClick={() => setOpen(true)}>
        Solicitar información
      </button>

      {open && (
        <div className="modal-overlay" onClick={close}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-form-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Cerrar"
              onClick={close}
            >
              <CloseIcon size={16} />
            </button>

            {submitted ? (
              <div className="modal-success">
                <h3>¡Gracias por su interés!</h3>
                <p>
                  Recibimos su solicitud sobre {serviceName}. Nuestro equipo le
                  responderá a la brevedad.
                </p>
                <button type="button" className="btn btn-primary" onClick={close}>
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Solicitar información</p>
                <h3 id="info-form-title">{serviceName}</h3>
                <form className="info-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      Nombre completo *
                      <input type="text" name="nombre" required />
                    </label>
                    <label>
                      Correo corporativo *
                      <input type="email" name="correo" required />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Empresa *
                      <input type="text" name="empresa" required />
                    </label>
                    <label>
                      Cargo
                      <input type="text" name="cargo" />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Teléfono
                      <input type="tel" name="telefono" />
                    </label>
                    <label>
                      Servicio de interés
                      <input type="text" value={serviceName} disabled />
                    </label>
                  </div>
                  <label className="form-field-full">
                    Mensaje
                    <textarea
                      name="mensaje"
                      rows={3}
                      placeholder="Cuéntenos en qué podemos ayudarle"
                    />
                  </label>
                  <label className="form-checkbox">
                    <input type="checkbox" name="consentimiento" required />
                    <span>
                      Autorizo el tratamiento de mis datos personales conforme
                      a la{" "}
                      <Link
                        href="/politica-de-datos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        política de privacidad
                      </Link>{" "}
                      de Spectrum. *
                    </span>
                  </label>
                  <label className="form-checkbox">
                    <input type="checkbox" name="promos" />
                    <span>
                      Deseo recibir novedades y promociones de los servicios
                      de Spectrum.
                    </span>
                  </label>
                  {error && <p className="form-error">{error}</p>}
                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar solicitud"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
