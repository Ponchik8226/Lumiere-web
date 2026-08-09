import { salon } from "../data/salon";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[var(--color-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/about.jpg"
              alt="Интерьер студии LUMIÈRE — рабочая зона"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* floating label */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-ink)] text-white px-8 py-6 hidden lg:block">
              <p className="font-display text-4xl font-light">2018</p>
              <p className="text-xs tracking-widest uppercase text-stone-400 mt-1">Год открытия</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand-dark)] mb-4">
              О студии
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-tight text-[var(--color-ink)] mb-8">
              {salon.about.heading}
            </h2>
            <p className="text-[var(--color-ink-soft)] font-light leading-relaxed mb-5">
              {salon.about.text}
            </p>
            <p className="text-[var(--color-ink-soft)] font-light leading-relaxed mb-12">
              {salon.about.text2}
            </p>

            {/* Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {salon.advantages.map((adv) => (
                <div key={adv.title} className="border-t border-stone-200 pt-5">
                  <h3 className="font-medium text-sm text-[var(--color-ink)] mb-2 leading-snug">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-[var(--color-ink-soft)] font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}