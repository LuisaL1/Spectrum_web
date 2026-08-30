import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";
import InfoRequestForm from "@/components/widgets/InfoRequestForm";
import { CheckIcon } from "@/components/icons";
import { capabilityIconMap } from "@/components/icons/capability-icon-map";
import { solutions, getSolutionBySlug } from "@/data/solutions-data";

const locale = "es";

const content = {
  businessUnit: "Unidad de negocio",
  helpDesk: "Mesa de ayuda",
  whatIncludes: "Qué incluye",
  scope: "Alcance de la solución",
  whySpectrum: "Por qué Spectrum",
  valueHeading: "El valor de trabajar con Spectrum",
};

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug, locale);
  if (!solution) return {};
  return {
    title: `${solution.title} | Spectrum`,
    description: solution.intro,
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug, locale);
  if (!solution) notFound();

  return (
    <>
      <Header locale={locale} />
      <main id="main-content">
        <section className="solution-hero">
          <Image
            src={solution.bg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="solution-hero-bg"
          />
          <div className="wrap">
            <p className="eyebrow">
              {content.businessUnit} {solution.icon}
            </p>
            <h1>{solution.title}</h1>
            <p className="solution-tagline">{solution.tagline}</p>
            <p className="solution-intro">{solution.intro}</p>
            <div className="tags">
              {solution.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="solution-hero-actions">
              <a
                href="https://soporte.spectrumt.co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {content.helpDesk}
              </a>
              <InfoRequestForm
                serviceName={solution.title}
                serviceSlug={solution.slug}
                locale={locale}
              />
            </div>
          </div>
        </section>

        <section className="on-light">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{content.whatIncludes}</p>
              <h2>{content.scope}</h2>
            </div>
            <div className="capability-grid">
              {solution.capabilities.map((item) => {
                const Icon = capabilityIconMap[item.icon];
                return (
                  <div className="capability-item" key={item.title}>
                    {Icon && (
                      <div className="capability-icon" aria-hidden="true">
                        <Icon size={22} />
                      </div>
                    )}
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="on-graphite">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{content.whySpectrum}</p>
              <h2>{content.valueHeading}</h2>
            </div>
            <ul className="value-list">
              {solution.values.map((value) => (
                <li key={value}>
                  <CheckIcon size={18} />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaStrip locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
