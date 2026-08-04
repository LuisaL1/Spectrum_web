import knowledgeBase from "@/data/knowledge-base.json";

const { mision, vision } = knowledgeBase.empresa;

const pillars = [
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

const historiaEtapas = [
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

export default function Ecosystem() {
  return (
    <>
      <section className="on-graphite">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">All systems. One future.</p>
            <h2>Un ecosistema, no piezas aisladas</h2>
            <p>
              Todo lo que construimos comparte un mismo lenguaje, una misma
              lógica y una misma dirección: sistemas preparados para
              evolucionar.
            </p>
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
            <p className="eyebrow">Nuestra historia</p>
            <h2>Cinco etapas de un mismo propósito</h2>
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
              <p className="eyebrow">Misión</p>
              <p>{mision}</p>
            </div>
            <div>
              <p className="eyebrow">Visión</p>
              <p>{vision}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
