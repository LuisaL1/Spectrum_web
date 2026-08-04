import Link from "next/link";
import Image from "next/image";
import InfoRequestForm from "@/components/widgets/InfoRequestForm";
import AIHighlightsCarousel from "./AIHighlightsCarousel";

export default function AISpotlight() {
  return (
    <section className="ai-spotlight">
      <div className="ai-spotlight-robot-wrap">
        <Image
          src="/fondos/IArobot.png"
          alt="Robot representando la inteligencia artificial de Spectrum"
          fill
          sizes="(max-width: 980px) 0px, 60vw"
          className="ai-spotlight-robot"
        />
      </div>
      <div className="wrap ai-spotlight-inner">
        <div className="ai-spotlight-content">
          <p className="eyebrow">
            <span className="badge-new">Nuevo</span> Servicio destacado
          </p>
          <p className="ai-wordmark">
            <span>AI</span> Spectrum
          </p>
          <h2>
            Transforma tus ideas en soluciones <em>inteligentes</em>
          </h2>
          <p className="ai-spotlight-lead">
            Ofrecemos soluciones de inteligencia artificial diseñadas para
            ayudarte a crecer, optimizar procesos y tomar decisiones más
            inteligentes. Nuestra tecnología combina machine learning,
            análisis predictivo y automatización para convertir datos en
            resultados reales.
          </p>
          <AIHighlightsCarousel />
          <div className="ai-spotlight-actions">
            <Link
              href="/soluciones/inteligencia-artificial"
              className="btn btn-primary"
            >
              Conocer la solución completa
            </Link>
            <InfoRequestForm
              serviceName="Inteligencia Artificial"
              serviceSlug="inteligencia-artificial"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
