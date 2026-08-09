import { useState } from "react";
import { salon } from "../data/salon";

const categoryMeta: Record<string, { icon: string; desc: string }> = {
  Волосы: {
    icon: "✦",
    desc: "Стрижки, окрашивание и восстановительные процедуры от сертифицированных колористов",
  },
  Ногти: {
    icon: "◈",
    desc: "Маникюр, педикюр и nail-арт с покрытиями, которые держатся до трёх недель",
  },
  Лицо: {
    icon: "◇",
    desc: "Аппаратная косметология и инъекционные процедуры с сертифицированными препаратами",
  },
};

export default function Services() {
  const [active, setActive] = useState(0);
  const category = salon.services[active];
  const meta = categoryMeta[category.category];

  return (
    <section id="services" className="py-24 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand-dark)] mb-3">
              Что мы делаем
            </p>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] font-light text-[var(--color-ink)] leading-none">
              Услуги
              <br />
              <span className="italic">и цены</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs tracking-widest uppercase text-[var(--color-ink-soft)] border-b border-[var(--color-ink-soft)] pb-px hover:text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
          >
            Записаться на консультацию
          </a>
        </div>

        {/* Category tabs — card style */}
        <div className="grid grid-cols-3 gap-3 mb-12">
          {salon.services.map((cat, i) => {
            const m = categoryMeta[cat.category];
            const isActive = i === active;
            return (
              <button
                key={cat.category}
                onClick={() => setActive(i)}
                className={`text-left p-5 lg:p-7 border transition-all duration-300 ${
                  isActive
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-stone-200 bg-white hover:border-stone-400"
                }`}
              >
                <span
                  className={`block text-xl mb-3 ${
                    isActive ? "text-[var(--color-brand)]" : "text-[var(--color-brand-dark)]"
                  }`}
                  aria-hidden="true"
                >
                  {m?.icon}
                </span>
                <span
                  className={`block text-xs tracking-widest uppercase font-medium ${
                    isActive ? "text-white" : "text-[var(--color-ink)]"
                  }`}
                >
                  {cat.category}
                </span>
                <span
                  className={`block text-xs mt-1 font-light leading-relaxed hidden lg:block ${
                    isActive ? "text-stone-400" : "text-[var(--color-ink-soft)]"
                  }`}
                >
                  {cat.items.length} процедур{cat.items.length >= 5 ? "" : "ы"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category description */}
        {meta && (
          <p className="text-sm text-[var(--color-ink-soft)] font-light mb-8 max-w-xl leading-relaxed border-l-2 border-[var(--color-brand)] pl-4">
            {meta.desc}
          </p>
        )}

        {/* Items — two-column on desktop */}
        <div className="grid lg:grid-cols-2 gap-x-16">
          {category.items.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-5 border-b border-stone-200 group"
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-[var(--color-brand)] text-xs flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <span className="text-base font-light text-[var(--color-ink)] group-hover:text-[var(--color-brand-dark)] transition-colors">
                  {item.name}
                </span>
              </div>
              <span className="font-display text-lg text-[var(--color-ink)] font-light flex-shrink-0 ml-6">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-ink-soft)] font-light">
            * Окончательная стоимость уточняется на консультации
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[var(--color-brand-dark)] transition-colors duration-300"
          >
            Записаться <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}