import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "../icons";
import { articles } from "@/data/articles";

export default function Blog() {
  return (
    <section className="on-light pattern-bg" id="blog">
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
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <div className="blog-thumb">
                {article.bg && (
                  <Image
                    src={article.bg}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="blog-thumb-bg"
                  />
                )}
                <span>{article.category}</span>
              </div>
              <div className="blog-body">
                <p className="date">{article.date}</p>
                <h3>{article.title}</h3>
                <Link className="more" href={`/blog/${article.slug}`}>
                  Leer artículo <ArrowRightIcon size={13} />
                </Link>
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
