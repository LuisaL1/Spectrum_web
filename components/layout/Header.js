"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretIcon, CloseIcon, MenuIcon } from "../icons";
import { solutions } from "@/data/solutions-data";
import SearchModal from "../widgets/SearchModal";

const nosotrosLinks = [
  {
    title: "Nosotros",
    desc: "Quienes somos y que nos mueve",
    href: "/#nosotros",
  },
  {
    title: "Nuestro equipo",
    desc: "Las personas detras de Spectrum",
    href: "/equipo",
  },
];

const blogLinks = [
  {
    title: "Blog",
    desc: "Articulos tecnicos de nuestro equipo",
    href: "/#blog",
  },
  {
    title: "Novedades",
    desc: "Noticias y lanzamientos de Spectrum",
    href: "/novedades",
  },
];

const navLinks = [{ href: "/#contacto", label: "Contacto", id: "contacto" }];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const sections = document.querySelectorAll("main section[id]");
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="main-nav">
        <div className="wrap nav-row">
          <Link href="/" className="logo">
            <Image
              src="/logos/logo-spectrum.png"
              alt="Spectrum"
              width={2172}
              height={724}
              className="logo-img"
              priority
            />
          </Link>

          <nav
            className={`primary${menuOpen ? " is-open" : ""}`}
            id="menu-principal"
            aria-label="Principal"
          >
            <div className="nav-mobile-utilities">
              <SearchModal inline />
            </div>
            <ul>
              <li
                className={`nav-item${openDropdown === "nosotros" ? " dropdown-open" : ""}`}
              >
                <div className="top-link-row">
                  <Link
                    className="top-link"
                    href="/#nosotros"
                    aria-current={
                      activeId === "nosotros" || pathname === "/equipo"
                        ? "true"
                        : undefined
                    }
                    onClick={closeMenu}
                  >
                    Nosotros
                  </Link>
                  <button
                    className="caret-btn"
                    type="button"
                    aria-expanded={openDropdown === "nosotros"}
                    aria-controls="dropdown-nosotros"
                    aria-label="Mostrar submenu de nosotros"
                    onClick={() =>
                      setOpenDropdown((open) =>
                        open === "nosotros" ? null : "nosotros"
                      )
                    }
                  >
                    <CaretIcon className="caret" size={14} />
                  </button>
                </div>
                <div className="dropdown" id="dropdown-nosotros">
                  {nosotrosLinks.map((item) => (
                    <Link key={item.title} href={item.href} onClick={closeMenu}>
                      <strong>{item.title}</strong>
                      <small>{item.desc}</small>
                    </Link>
                  ))}
                </div>
              </li>
              <li
                className={`nav-item${openDropdown === "soluciones" ? " dropdown-open" : ""}`}
              >
                <div className="top-link-row">
                  <Link
                    className="top-link"
                    href="/#soluciones"
                    aria-current={
                      activeId === "soluciones" ? "true" : undefined
                    }
                    onClick={closeMenu}
                  >
                    Soluciones
                  </Link>
                  <button
                    className="caret-btn"
                    type="button"
                    aria-expanded={openDropdown === "soluciones"}
                    aria-controls="dropdown-soluciones"
                    aria-label="Mostrar submenu de soluciones"
                    onClick={() =>
                      setOpenDropdown((open) =>
                        open === "soluciones" ? null : "soluciones"
                      )
                    }
                  >
                    <CaretIcon className="caret" size={14} />
                  </button>
                </div>
                <div className="dropdown" id="dropdown-soluciones">
                  {solutions.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/soluciones/${item.slug}`}
                      onClick={closeMenu}
                    >
                      <strong>{item.title}</strong>
                      <small>{item.desc}</small>
                    </Link>
                  ))}
                </div>
              </li>
              <li className="nav-item" key="/#casos">
                <Link
                  className="top-link"
                  href="/#casos"
                  aria-current={activeId === "casos" ? "true" : undefined}
                  onClick={closeMenu}
                >
                  Casos de exito
                </Link>
              </li>
              <li
                className={`nav-item${openDropdown === "blog" ? " dropdown-open" : ""}`}
              >
                <div className="top-link-row">
                  <Link
                    className="top-link"
                    href="/#blog"
                    aria-current={
                      activeId === "blog" || pathname === "/novedades"
                        ? "true"
                        : undefined
                    }
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <button
                    className="caret-btn"
                    type="button"
                    aria-expanded={openDropdown === "blog"}
                    aria-controls="dropdown-blog"
                    aria-label="Mostrar submenu de blog"
                    onClick={() =>
                      setOpenDropdown((open) => (open === "blog" ? null : "blog"))
                    }
                  >
                    <CaretIcon className="caret" size={14} />
                  </button>
                </div>
                <div className="dropdown" id="dropdown-blog">
                  {blogLinks.map((item) => (
                    <Link key={item.title} href={item.href} onClick={closeMenu}>
                      <strong>{item.title}</strong>
                      <small>{item.desc}</small>
                    </Link>
                  ))}
                </div>
              </li>
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link
                    className="top-link"
                    href={link.href}
                    aria-current={activeId === link.id ? "true" : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://soporte.spectrumt.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-mobile-cta"
              onClick={closeMenu}
            >
              Mesa de ayuda
            </a>
          </nav>

          <div className="nav-cta">
            <div className="lang-switch" aria-label="Selector de idioma">
              <span className="active">ES</span>|<span>EN</span>
            </div>
            <SearchModal />
            <a
              href="https://soporte.spectrumt.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Mesa de ayuda
            </a>
            <button
              className="mobile-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu-principal"
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
