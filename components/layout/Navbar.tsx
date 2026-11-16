"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/contact";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    const updateActiveLink = () => {
      setActiveLink(window.location.hash || "#home");
    };
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        const currentSection = visibleSections.at(-1)?.target.id;
        if (currentSection) setActiveLink(`#${currentSection}`);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    updateScrollState();
    links.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1));
      if (section) sectionObserver.observe(section);
    });
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a
          className="brand-mark"
          href="#home"
          aria-label={`${contact.name} — home`}
          onClick={closeMenu}
        >
          <span className="brand-monogram" aria-hidden="true">
            {contact.monogram}
          </span>
          <span className="brand-name">{contact.name.toUpperCase()}</span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a
              className={`nav-link${activeLink === link.href ? " is-active" : ""}`}
              href={link.href}
              key={link.href}
              aria-current={activeLink === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <span className="nav-availability">
            <span className="availability-dot" aria-hidden="true" />
            <span>Available for projects</span>
          </span>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            >
              {links.map((link, index) => (
                <motion.a
                  className={`mobile-nav-link${activeLink === link.href ? " is-active" : ""}`}
                  href={link.href}
                  key={link.href}
                  aria-current={activeLink === link.href ? "page" : undefined}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.16,
                    delay: prefersReducedMotion ? 0 : index * 0.025,
                  }}
                >
                  {link.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </motion.a>
              ))}
              <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>
                Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
