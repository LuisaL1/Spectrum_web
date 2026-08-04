"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../icons";
import { solutions } from "@/data/solutions-data";

const total = solutions.length;

function positionOf(index, active) {
  const offset = (index - active + total) % total;
  if (offset === 0) return "active";
  if (offset === 1) return "next";
  if (offset === total - 1) return "prev";
  return "hidden";
}

const SWIPE_THRESHOLD = 40;

export default function Solutions() {
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
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Unidades de negocio</p>
          <h2>Soluciones para cada capa de su operación</h2>
          <p>
            Cinco frentes complementarios que trabajan como un único
            sistema de infraestructura y protección.
          </p>
        </div>
        <div className="units-carousel">
          <div
            className="units-track"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {solutions.map((unit, index) => (
              <article
                className={`unit-card is-${positionOf(index, active)}`}
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
                <Link className="more" href={`/soluciones/${unit.slug}`}>
                  Conocer más <ArrowRightIcon size={13} />
                </Link>
              </article>
            ))}
          </div>
          <div className="units-carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              aria-label="Ver unidad anterior"
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
                  aria-label={`Ir a la unidad ${unit.title}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="carousel-btn"
              aria-label="Ver siguiente unidad"
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
