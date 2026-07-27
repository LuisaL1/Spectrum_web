import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { ArrowRightIcon } from "../icons";

export default function BlogArchive() {
  const [featured, ...rest] = articles;

  return (
    <section className="on-light" id="blog-archive">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Spectrum</p>
          <h2>Blog</h2>
          <p className="gray-500">
            Artículos técnicos sobre infraestructura, ciberseguridad,
            conectividad e inteligencia artificial escritos por nuestro
            equipo.
          </p>
        </div>

        {featured && (
          <article className="news-featured">
            <div className="blog-thumb news-featured-thumb">
              {featured.bg && (
                <Image
                  src={featured.bg}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="blog-thumb-bg"
                />
              )}
              <span>{featured.category}</span>
            </div>
            <div className="news-featured-body blog-body">
              <p className="date">Destacado &middot; {featured.date}</p>
              <h3>{featured.title}</h3>
              <p className="news-excerpt">{featured.excerpt}</p>
              <Link className="more" href={`/blog/${featured.slug}`}>
                Leer artículo <ArrowRightIcon size={13} />
              </Link>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="news-list">
            {rest.map((article) => (
              <article className="news-list-item" key={article.slug}>
                <div className="blog-thumb news-list-thumb">
                  {article.bg && (
                    <Image
                      src={article.bg}
                      alt=""
                      fill
                      sizes="160px"
                      className="blog-thumb-bg"
                    />
                  )}
                  <span>{article.category}</span>
                </div>
                <div className="news-list-body blog-body">
                  <p className="date">{article.date}</p>
                  <h3>{article.title}</h3>
                  <Link className="more" href={`/blog/${article.slug}`}>
                    Leer artículo <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
