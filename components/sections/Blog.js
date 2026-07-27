import Link from "next/link";
import { ArrowRightIcon } from "../icons";

export const posts = [
  {
    category: "Ciberseguridad",
    date: "Julio 2026",
    title:
      "5 señales de que su red necesita una auditoría de vulnerabilidades",
    excerpt:
      "Del acceso lento a alertas que nadie revisa: estas son las señales que indican que su infraestructura necesita una evaluación de vulnerabilidades antes de que se convierta en un incidente.",
  },
  {
    category: "Infraestructura",
    date: "Junio 2026",
    title: "Hiperconvergencia: qué es y por qué su empresa la necesita",
    excerpt:
      "Consolidar cómputo, almacenamiento y virtualización en una sola plataforma reduce costos y puntos de falla. Así funciona la hiperconvergencia en la práctica.",
  },
  {
    category: "Conectividad",
    date: "Junio 2026",
    title: "SD-WAN: cómo conectar sus sedes sin perder seguridad",
    excerpt:
      "Conectar múltiples sedes no debería significar sacrificar seguridad ni desempeño. Explicamos cómo SD-WAN resuelve ambos frentes a la vez.",
  },
]; 

export default function Blog() {
  return (
    <section className="on-light" id="blog">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Recursos</p>
          <h2>Blog &amp; contenido técnico</h2>
          <p className="gray-500">
            Artículos mensuales sobre infraestructura, ciberseguridad y
            conectividad escritos por nuestro equipo.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-thumb">
                <span>{post.category}</span>
              </div>
              <div className="blog-body">
                <p className="date">{post.date}</p>
                <h3>{post.title}</h3>
                <a className="more" href="#">
                  Leer artículo <ArrowRightIcon size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="blog-footer-cta">
          <Link href="/novedades" className="btn btn-primary">
            Ver novedades
          </Link>
        </div>
      </div>
    </section>
  );
}
