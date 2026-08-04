import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { ArrowRightIcon } from "../icons";

export default function Novedades() {
  const [featured, ...rest] = news;

  return (
    <section className="on-light pattern-bg" id="novedades">
      <div className="wrap">
        <Link className="article-back" href="/#blog">
          <ArrowRightIcon size={13} className="article-back-icon" />
          Volver al home
        </Link>
        <div className="section-head">
          <p className="eyebrow">Spectrum</p>
          <h2>Novedades</h2>
          <p className="gray-500">
            Noticias, alianzas, certificaciones y eventos de Spectrum.
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
              <Link className="more" href={`/novedades/${featured.slug}`}>
                Leer más <ArrowRightIcon size={13} />
              </Link>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="news-list">
            {rest.map((item) => (
              <article className="news-list-item" key={item.slug}>
                <div className="blog-thumb news-list-thumb">
                  {item.bg && (
                    <Image
                      src={item.bg}
                      alt=""
                      fill
                      sizes="160px"
                      className="blog-thumb-bg"
                    />
                  )}
                  <span>{item.category}</span>
                </div>
                <div className="news-list-body blog-body">
                  <p className="date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <Link className="more" href={`/novedades/${item.slug}`}>
                    Leer más <ArrowRightIcon size={13} />
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
