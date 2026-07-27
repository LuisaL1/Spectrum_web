export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-bg-video"
        src="/fondos/fondo-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-bg-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <p className="eyebrow">Future Powered</p>
        <h1>
          Sistemas conectados
          <br />
          para un <em>futuro</em> seguro
        </h1>
        <p className="lead">
          Infraestructura tecnológica y ciberseguridad diseñadas como un
          mismo ecosistema: conectamos, protegemos y potenciamos la
          operación de su organización.
        </p>
        <div className="hero-actions">
          <a
            href="https://soporte.spectrumt.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Mesa de ayuda
          </a>
          <a
            href="/recursos/portafolio/Brochure%20Spectrum_CV.pdf"
            download
            className="btn btn-outline"
          >
            Descargar portafolio
          </a>
        </div>
      </div>
    </section>
  );
}
