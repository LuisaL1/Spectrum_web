import { WhatsAppIcon } from "@/components/icons";

const WHATSAPP_NUMBER = "573124650754";

const content = {
  es: {
    heading: "Hablemos de la evolución de su infraestructura",
    helpDesk: "Mesa de ayuda",
    whatsapp: "Escribir por WhatsApp",
  },
  en: {
    heading: "Let's talk about the evolution of your infrastructure",
    helpDesk: "Help desk",
    whatsapp: "Message on WhatsApp",
  },
};

export default function CtaStrip({ locale = "es" }) {
  const t = content[locale] || content.es;

  return (
    <section className="cta-strip" id="contacto">
      <div className="wrap">
        <h2>{t.heading}</h2>
        <div className="cta-strip-actions">
          <a
            href="https://soporte.spectrumt.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            {t.helpDesk}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={16} />
            {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
