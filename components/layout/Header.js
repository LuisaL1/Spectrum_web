"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretIcon, CloseIcon, MenuIcon } from "../icons";
import {
  solutionsMenuColumns,
  nosotrosMenuColumns,
  blogMenuColumns,
} from "@/data/nav-menu-data";
import SearchModal from "../widgets/SearchModal";

const navLinks = [{ href: "/#contacto", label: "Contacto", id: "contacto" }];

function MegaMenu({ id, columns, onLinkClick }) {
  return (
    <div className="mega-menu" id={id}>
      <div className="wrap mega-menu-inner">
        {columns.map((column) => (
          <div className="mega-menu-col" key={column.heading}>
            <h4>{column.heading}</h4>
            {column.items.map((item) => (
              <Link key={`${item.href}-${item.title}`} href={item.href} onClick={onLinkClick}>
                <strong>{item.title}</strong>
                {item.desc && <small>{item.desc}</small>}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (!openDropdown) return undefined;
    function handleClickOutside(event) {
      if (!event.target.closest(".nav-item")) setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

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
                <button
                  className="top-link"
                  type="button"
                  aria-expanded={openDropdown === "nosotros"}
                  aria-controls="dropdown-nosotros"
                  aria-current={
                    activeId === "nosotros" || pathname === "/equipo"
                      ? "true"
                      : undefined
                  }
                  onClick={() =>
                    setOpenDropdown((open) =>
                      open === "nosotros" ? null : "nosotros"
                    )
                  }
                >
                  <span className="top-link-label">Nosotros</span>
                  <CaretIcon className="caret" size={14} />
                </button>
                <MegaMenu
                  id="dropdown-nosotros"
                  columns={nosotrosMenuColumns}
                  onLinkClick={closeMenu}
                />
              </li>
              <li
                className={`nav-item${openDropdown === "soluciones" ? " dropdown-open" : ""}`}
              >
                <button
                  className="top-link"
                  type="button"
                  aria-expanded={openDropdown === "soluciones"}
                  aria-controls="dropdown-soluciones"
                  aria-current={activeId === "soluciones" ? "true" : undefined}
                  onClick={() =>
                    setOpenDropdown((open) =>
                      open === "soluciones" ? null : "soluciones"
                    )
                  }
                >
                  <span className="top-link-label">Soluciones</span>
                  <CaretIcon className="caret" size={14} />
                </button>
                <MegaMenu
                  id="dropdown-soluciones"
                  columns={solutionsMenuColumns}
                  onLinkClick={closeMenu}
                />
              </li>
              <li className="nav-item" key="/#casos">
                <Link
                  className="top-link"
                  href="/#casos"
                  aria-current={activeId === "casos" ? "true" : undefined}
                  onClick={closeMenu}
                >
                  <span className="top-link-label">Casos de exito</span>
                </Link>
              </li>
              <li
                className={`nav-item${openDropdown === "blog" ? " dropdown-open" : ""}`}
              >
                <button
                  className="top-link"
                  type="button"
                  aria-expanded={openDropdown === "blog"}
                  aria-controls="dropdown-blog"
                  aria-current={
                    activeId === "blog" || pathname === "/novedades"
                      ? "true"
                      : undefined
                  }
                  onClick={() =>
                    setOpenDropdown((open) => (open === "blog" ? null : "blog"))
                  }
                >
                  <span className="top-link-label">Blog</span>
                  <CaretIcon className="caret" size={14} />
                </button>
                <MegaMenu
                  id="dropdown-blog"
                  columns={blogMenuColumns}
                  onLinkClick={closeMenu}
                />
              </li>
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link
                    className="top-link"
                    href={link.href}
                    aria-current={activeId === link.id ? "true" : undefined}
                    onClick={closeMenu}
                  >
                    <span className="top-link-label">{link.label}</span>
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
