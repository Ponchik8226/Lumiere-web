import { useState } from "react";
import { salon } from "../data/salon";

export default function Services() {
  const [active, setActive] = useState(0);
  const category = salon.services[active];

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

        {/* Category tabs */}
        <div className="flex gap-0 border-b border-stone-200 mb-10">
          {salon.services.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-xs tracking-widest uppercase transition-colors duration-200 border-b-2 -mb-px ${
                i === active
                  ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                  : "border-transparent text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid gap-0">
          {category.items.map((item, i) => (
            <div
              key={item.name}
              className={`flex items-center justify-between py-5 ${
                i < category.items.length - 1 ? "border-b border-stone-200" : ""
              } group`}
            >
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] flex-shrink-0" aria-hidden="true" />
                <span className="text-base lg:text-lg font-light text-[var(--color-ink)] group-hover:text-[var(--color-brand-dark)] transition-colors">
                  {item.name}
                </span>
              </div>
              <span className="font-display text-lg lg:text-xl text-[var(--color-ink)] font-light flex-shrink-0 ml-8">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs text-[var(--color-ink-soft)] font-light">
          * Окончательная стоимость уточняется на консультации. Цены указаны без стоимости материалов.
        </p>
      </div>
    </section>
  );
}