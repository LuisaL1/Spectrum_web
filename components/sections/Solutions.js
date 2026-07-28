"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../icons";
import { solutions } from "@/data/solutions-data";

export default function Solutions() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

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
        <div className="units-carousel-controls">
          <button
            type="button"
            className="carousel-btn"
            aria-label="Ver unidad anterior"
            onClick={() => scroll(-1)}
          >
            <ArrowRightIcon size={16} style={{ transform: "rotate(180deg)" }} />
          </button>
          <button
            type="button"
            className="carousel-btn"
            aria-label="Ver siguiente unidad"
            onClick={() => scroll(1)}
          >
            <ArrowRightIcon size={16} />
          </button>
        </div>
        <div className="units-track" ref={trackRef}>
          {solutions.map((unit) => (
            <article
              className="unit-card"
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
      </div>
    </section>
  );
}
