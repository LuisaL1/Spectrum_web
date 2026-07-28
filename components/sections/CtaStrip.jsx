import { WhatsAppIcon } from "@/components/icons";

// TODO: reemplazar por el numero real de WhatsApp de Spectrum.
const WHATSAPP_NUMBER = "573000000000";

export default function CtaStrip() {
  return (
    <section className="cta-strip" id="contacto">
      <div className="wrap">
        <h2>Hablemos de la evolución de su infraestructura</h2>
        <div className="cta-strip-actions">
          <a
            href="https://soporte.spectrumt.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Mesa de ayuda
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={16} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
