import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../icons";

const footerColumns = [
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Casos de exito", href: "#casos" },
      { label: "Blog", href: "#blog" },
      { label: "Trabaja con nosotros", href: "#" },
    ],
  },
  {
    title: "Soluciones",
    links: [
      { label: "Infraestructura tecnologica", href: "#soluciones" },
      { label: "Ciberseguridad", href: "#soluciones" },
      { label: "Conectividad", href: "#soluciones" },
      { label: "Servicios de TI", href: "#soluciones" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Mesa de ayuda", href: "#contacto" },
      { label: "Solicitar asesoria", href: "#contacto" },
      { label: "WhatsApp", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "contacto@spectrumt.co", href: "mailto:contacto@spectrumt.co" },
      { label: "spectrumt.co", href: "#" },
      { label: "Colombia", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Image
                src="/logos/logo-spectrum.png"
                alt="Spectrum"
                width={2172}
                height={724}
                className="logo-img"
              />
            </a>
            <p>
              Ecosistema tecnológico de infraestructura, ciberseguridad y
              conectividad. Future Powered.
            </p>
            <div className="social">
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon size={15} />
              </a>
              <a
                href="https://www.instagram.com/spectrumt.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="https://www.facebook.com/people/Spectrum-Technology/61592216507649/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon size={15} />
              </a>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Spectrum. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Politica de privacidad</a>
            <a href="#">Terminos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
