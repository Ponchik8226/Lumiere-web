import { useState, useEffect } from "react";
import { salon } from "../data/salon";

const links = [
  { label: "Услуги", href: "#services" },
  { label: "О студии", href: "#about" },
  { label: "Мастера", href: "#masters" },
  { label: "Работы", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-white)] shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl lg:text-2xl font-light tracking-[0.25em] text-[var(--color-ink)] uppercase"
        >
          {salon.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-widest uppercase text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-white)] text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-[var(--color-brand-dark)] transition-colors duration-300"
        >
          Записаться
        </a>

        {/* Burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-px bg-[var(--color-ink)] transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[var(--color-ink)] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[var(--color-ink)] transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-[var(--color-white)] border-t border-stone-100 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm tracking-widest uppercase text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[var(--color-ink)] text-[var(--color-white)] text-xs tracking-widest uppercase py-3"
            >
              Записаться
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}