const valores = [
  {
    title: "Colaboramos",
    desc: "Compartimos conocimiento para construir mejores soluciones.",
  },
  {
    title: "Innovamos",
    desc: "Exploramos nuevas tecnologías para anticiparnos a los desafíos.",
  },
  {
    title: "Respondemos",
    desc: "Asumimos como propios los retos de nuestros clientes.",
  },
  {
    title: "Aprendemos",
    desc: "Evolucionamos constantemente junto con la tecnología.",
  },
  {
    title: "Cuidamos",
    desc: "Trabajamos con precisión, responsabilidad y transparencia.",
  },
];

export default function Culture() {
  return (
    <>
      <section id="cultura">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Cultura organizacional</p>
            <h2>Personas que transforman tecnología en posibilidades</h2>
            <p>
              En Spectrum creemos que la tecnología adquiere valor real
              cuando se construye con propósito. Nuestra cultura combina
              conocimiento, colaboración e innovación para transformar
              desafíos en soluciones que generan impacto.
            </p>
          </div>
          <div className="culture-values">
            {valores.map((valor) => (
              <div className="culture-value" key={valor.title}>
                <h3>{valor.title}</h3>
                <p>{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="culture-banner">
        <div className="wrap">
          <p>
            No solo desarrollamos <span>tecnología</span>. Construimos
            soluciones, conocimiento y relaciones que perduran.
          </p>
        </div>
      </section>
    </>
  );
}
