import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";
import { ArrowRightIcon } from "@/components/icons";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Spectrum`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="on-light pattern-bg article-doc">
          <div className="wrap article-wrap">
            <Link className="article-back" href="/blog">
              <ArrowRightIcon size={13} className="article-back-icon" />
              Volver al blog
            </Link>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-meta">{article.date}</p>
            <p className="article-lead">{article.excerpt}</p>

            {article.bg && (
              <div className="article-image">
                <Image
                  src={article.bg}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 760px"
                  priority
                />
              </div>
            )}

            {article.content.map((block, index) => (
              <div key={index}>
                {block.heading && <h2>{block.heading}</h2>}
                <p>{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
