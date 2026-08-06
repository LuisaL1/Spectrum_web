import knowledgeBase from "@/data/knowledge-base.json";

const { mision, vision } = knowledgeBase.empresa;

const pillarsEs = [
  {
    num: "01",
    title: "Conexión inteligente",
    desc: "Integramos infraestructura, redes y seguridad en una sola arquitectura, eliminando puntos ciegos entre sistemas.",
  },
  {
    num: "02",
    title: "Seguridad integral",
    desc: "Monitoreo continuo, análisis de vulnerabilidades y respuesta a incidentes para una operación siempre protegida.",
  },
  {
    num: "03",
    title: "Evolución constante",
    desc: "Arquitecturas modulares y escalables, listas para incorporar nuevos servicios sin perder coherencia ni control.",
  },
];

const pillarsEn = [
  {
    num: "01",
    title: "Smart connection",
    desc: "We integrate infrastructure, networks and security into a single architecture, eliminating blind spots between systems.",
  },
  {
    num: "02",
    title: "Comprehensive security",
    desc: "Continuous monitoring, vulnerability analysis and incident response for an operation that's always protected.",
  },
  {
    num: "03",
    title: "Constant evolution",
    desc: "Modular, scalable architectures, ready to incorporate new services without losing coherence or control.",
  },
];

const historiaEtapasEs = [
  {
    num: "01",
    title: "Origen",
    desc: "Iniciamos ofreciendo servicios administrados de TI, sentando las bases del ecosistema que hoy es Spectrum.",
  },
  {
    num: "02",
    title: "Transformación",
    desc: "Acompañamos a industrias tradicionales en su proceso de digitalización, integrando infraestructura y seguridad como un mismo frente.",
  },
  {
    num: "03",
    title: "Crecimiento e innovación",
    desc: "Desarrollamos soluciones personalizadas para necesidades específicas, ampliando nuestras capacidades en ciberseguridad, conectividad e IA.",
  },
  {
    num: "04",
    title: "Expansión",
    desc: "Llegamos a nuevos mercados y sectores emergentes, llevando nuestro modelo de ecosistema integrado a más organizaciones.",
  },
  {
    num: "05",
    title: "Mejoramiento continuo",
    desc: "Seguimos evolucionando para consolidarnos como un aliado tecnológico de referencia en la región.",
  },
];

const historiaEtapasEn = [
  {
    num: "01",
    title: "Origin",
    desc: "We started by offering managed IT services, laying the foundations of the ecosystem that Spectrum is today.",
  },
  {
    num: "02",
    title: "Transformation",
    desc: "We supported traditional industries through their digitalization process, integrating infrastructure and security as a single front.",
  },
  {
    num: "03",
    title: "Growth and innovation",
    desc: "We developed customized solutions for specific needs, expanding our capabilities in cybersecurity, connectivity and AI.",
  },
  {
    num: "04",
    title: "Expansion",
    desc: "We reached new markets and emerging sectors, bringing our integrated ecosystem model to more organizations.",
  },
  {
    num: "05",
    title: "Continuous improvement",
    desc: "We keep evolving to establish ourselves as a leading technology partner in the region.",
  },
];

const content = {
  es: {
    tagline: "All systems. One future.",
    heading: "Un ecosistema, no piezas aisladas",
    lead: "Todo lo que construimos comparte un mismo lenguaje, una misma lógica y una misma dirección: sistemas preparados para evolucionar.",
    historiaEyebrow: "Nuestra historia",
    historiaHeading: "Cinco etapas de un mismo propósito",
    mision: "Misión",
    vision: "Visión",
    misionText: mision,
    visionText: vision,
  },
  en: {
    tagline: "All systems. One future.",
    heading: "One ecosystem, not isolated pieces",
    lead: "Everything we build shares the same language, the same logic and the same direction: systems built to evolve.",
    historiaEyebrow: "Our story",
    historiaHeading: "Five stages, one purpose",
    mision: "Mission",
    vision: "Vision",
    misionText:
      "Connect, protect and empower our clients' technology operations through an integrated ecosystem of infrastructure, cybersecurity, connectivity and artificial intelligence, with close, responsible service from start to finish.",
    visionText:
      "To be the leading technology partner in Latin America for public and private organizations seeking to modernize their infrastructure without sacrificing security or operational continuity.",
  },
};

export default function Ecosystem({ locale = "es" }) {
  const t = content[locale] || content.es;
  const pillars = locale === "en" ? pillarsEn : pillarsEs;
  const historiaEtapas = locale === "en" ? historiaEtapasEn : historiaEtapasEs;

  return (
    <>
      <section className="on-graphite">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t.tagline}</p>
            <h2>{t.heading}</h2>
            <p>{t.lead}</p>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.num}>
                <p className="num">{pillar.num}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="historia">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t.historiaEyebrow}</p>
            <h2>{t.historiaHeading}</h2>
          </div>
          <div className="historia-track">
            {historiaEtapas.map((etapa) => (
              <div className="historia-item" key={etapa.num}>
                <p className="num">{etapa.num}</p>
                <h3>{etapa.title}</h3>
                <p>{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-graphite" id="mision-vision">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <p className="eyebrow">{t.mision}</p>
              <p>{t.misionText}</p>
            </div>
            <div>
              <p className="eyebrow">{t.vision}</p>
              <p>{t.visionText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
