import Link from "next/link";
import Image from "next/image";
import InfoRequestForm from "@/components/widgets/InfoRequestForm";
import AIHighlightsCarousel from "./AIHighlightsCarousel";
import { localizedHref } from "@/lib/i18n";

const content = {
  es: {
    badgeNew: "Nuevo",
    eyebrowSuffix: "Servicio destacado",
    robotAlt: "Robot representando la inteligencia artificial de Spectrum",
    heading: "Transforma tus ideas en soluciones",
    headingEm: "inteligentes",
    lead: "Ofrecemos soluciones de inteligencia artificial diseñadas para ayudarte a crecer, optimizar procesos y tomar decisiones más inteligentes. Nuestra tecnología combina machine learning, análisis predictivo y automatización para convertir datos en resultados reales.",
    cta: "Conocer la solución completa",
    serviceName: "Inteligencia Artificial",
  },
  en: {
    badgeNew: "New",
    eyebrowSuffix: "Featured service",
    robotAlt: "Robot representing Spectrum's artificial intelligence",
    heading: "Turn your ideas into",
    headingEm: "intelligent",
    lead: "We offer artificial intelligence solutions designed to help you grow, optimize processes and make smarter decisions. Our technology combines machine learning, predictive analytics and automation to turn data into real results.",
    cta: "See the full solution",
    serviceName: "Artificial Intelligence",
  },
};

export default function AISpotlight({ locale = "es" }) {
  const t = content[locale] || content.es;

  return (
    <section className="ai-spotlight">
      <div className="ai-spotlight-robot-wrap">
        <Image
          src="/fondos/IArobot.png"
          alt={t.robotAlt}
          fill
          sizes="(max-width: 980px) 0px, 60vw"
          className="ai-spotlight-robot"
        />
      </div>
      <div className="wrap ai-spotlight-inner">
        <div className="ai-spotlight-content">
          <p className="eyebrow">
            <span className="badge-new">{t.badgeNew}</span> {t.eyebrowSuffix}
          </p>
          <p className="ai-wordmark">
            <span>AI</span> Spectrum
          </p>
          <h2>
            {locale === "en" ? (
              <>
                {t.heading} <em>{t.headingEm}</em> solutions
              </>
            ) : (
              <>
                {t.heading} <em>{t.headingEm}</em>
              </>
            )}
          </h2>
          <p className="ai-spotlight-lead">{t.lead}</p>
          <AIHighlightsCarousel locale={locale} />
          <div className="ai-spotlight-actions">
            <Link
              href={localizedHref(locale, "/soluciones/inteligencia-artificial")}
              className="btn btn-primary"
            >
              {t.cta}
            </Link>
            <InfoRequestForm
              serviceName={t.serviceName}
              serviceSlug="inteligencia-artificial"
              locale={locale}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
