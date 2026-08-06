"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../icons";
import { getSolutions } from "@/data/solutions-data";
import { localizedHref } from "@/lib/i18n";

const content = {
  es: {
    eyebrow: "Unidades de negocio",
    heading: "Soluciones para cada capa de su operación",
    lead: "Cinco frentes complementarios que trabajan como un único sistema de infraestructura y protección.",
    more: "Conocer más",
    prev: "Ver unidad anterior",
    next: "Ver siguiente unidad",
    goTo: (title) => `Ir a la unidad ${title}`,
  },
  en: {
    eyebrow: "Business units",
    heading: "Solutions for every layer of your operation",
    lead: "Five complementary fronts that work as a single infrastructure and protection system.",
    more: "Learn more",
    prev: "View previous unit",
    next: "View next unit",
    goTo: (title) => `Go to ${title} unit`,
  },
};

function positionOf(index, active, total) {
  const offset = (index - active + total) % total;
  if (offset === 0) return "active";
  if (offset === 1) return "next";
  if (offset === total - 1) return "prev";
  return "hidden";
}

const SWIPE_THRESHOLD = 40;

export default function Solutions({ locale = "es" }) {
  const solutions = getSolutions(locale);
  const total = solutions.length;
  const t = content[locale] || content.es;
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  function go(direction) {
    setActive((current) => (current + direction + total) % total);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) go(-1);
    else if (deltaX < -SWIPE_THRESHOLD) go(1);
    touchStartX.current = null;
  }

  return (
    <section id="soluciones">
      <Image
        src="/logos/logo-spectrum-favicon.png"
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        className="soluciones-mark"
      />
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
          <p>{t.lead}</p>
        </div>
        <div className="units-carousel">
          <div
            className="units-track"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {solutions.map((unit, index) => (
              <article
                className={`unit-card is-${positionOf(index, active, total)}`}
                key={unit.slug}
                style={unit.bg ? { backgroundImage: `url(${unit.bg})` } : undefined}
              >
                <div className="unit-icon" aria-hidden="true">
                  {unit.icon}
                </div>
                <h3>{unit.title}</h3>
                <p>{unit.desc}</p>
                <div className="tags">
                  {unit.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="more"
                  href={localizedHref(locale, `/soluciones/${unit.slug}`)}
                >
                  {t.more} <ArrowRightIcon size={13} />
                </Link>
              </article>
            ))}
          </div>
          <div className="units-carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              aria-label={t.prev}
              onClick={() => go(-1)}
            >
              <ArrowRightIcon size={16} style={{ transform: "rotate(180deg)" }} />
            </button>
            <div className="units-carousel-dots">
              {solutions.map((unit, index) => (
                <button
                  key={unit.slug}
                  type="button"
                  className={`units-carousel-dot${index === active ? " active" : ""}`}
                  aria-label={t.goTo(unit.title)}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="carousel-btn"
              aria-label={t.next}
              onClick={() => go(1)}
            >
              <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
