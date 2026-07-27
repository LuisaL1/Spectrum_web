const pillars = [
  {
    num: "01",
    title: "Conexion inteligente",
    desc: "Integramos infraestructura, redes y seguridad en una sola arquitectura, eliminando puntos ciegos entre sistemas.",
  },
  {
    num: "02",
    title: "Seguridad integral",
    desc: "Monitoreo continuo, analisis de vulnerabilidades y respuesta a incidentes para una operacion siempre protegida.",
  },
  {
    num: "03",
    title: "Evolucion constante",
    desc: "Arquitecturas modulares y escalables, listas para incorporar nuevos servicios sin perder coherencia ni control.",
  },
];

export default function Ecosystem() {
  return (
    <section className="on-graphite" id="nosotros">
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
  );
}
