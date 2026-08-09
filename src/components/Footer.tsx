import { salon } from "../data/salon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-light tracking-[0.25em] uppercase text-white mb-1">
              {salon.name}
            </p>
            <p className="text-xs text-stone-500 tracking-widest uppercase">{salon.tagline}</p>
          </div>

          {/* Nav */}
          <nav aria-label="Навигация в подвале">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                ["Услуги", "#services"],
                ["О студии", "#about"],
                ["Мастера", "#masters"],
                ["Контакты", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <a
            href={`https://instagram.com/${salon.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-stone-500 hover:text-[var(--color-brand)] transition-colors"
            aria-label={`Instagram студии ${salon.name}`}
          >
            @{salon.instagram}
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            © {year} {salon.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}