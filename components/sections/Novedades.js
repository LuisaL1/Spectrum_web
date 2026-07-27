import { posts } from "./Blog";
import { ArrowRightIcon } from "../icons";

export default function Novedades() {
  const [featured, ...rest] = posts;

  return (
    <section className="on-light" id="novedades">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Spectrum</p>
          <h2>Novedades</h2>
          <p className="gray-500">
            Noticias, lanzamientos y contenido técnico sobre infraestructura,
            ciberseguridad y conectividad.
          </p>
        </div>

        {featured && (
          <article className="news-featured">
            <div className="blog-thumb news-featured-thumb">
              <span>{featured.category}</span>
            </div>
            <div className="news-featured-body blog-body">
              <p className="date">Destacado &middot; {featured.date}</p>
              <h3>{featured.title}</h3>
              <p className="news-excerpt">{featured.excerpt}</p>
              <a className="more" href="#">
                Leer artículo <ArrowRightIcon size={13} />
              </a>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="news-list">
            {rest.map((post) => (
              <article className="news-list-item" key={post.title}>
                <div className="blog-thumb news-list-thumb">
                  <span>{post.category}</span>
                </div>
                <div className="news-list-body blog-body">
                  <p className="date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <a className="more" href="#">
                    Leer artículo <ArrowRightIcon size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
