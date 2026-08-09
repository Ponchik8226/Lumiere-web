import { salon } from "../data/salon";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-36 bg-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand)] mb-3">
              Портфолио
            </p>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] font-light text-white leading-none">
              Работы <span className="italic">студии</span>
            </h2>
          </div>
          <a
            href={`https://instagram.com/${salon.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-stone-400 border-b border-stone-600 pb-px hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors"
          >
            Instagram @{salon.instagram}
          </a>
        </div>

        {/* Grid — manual sizing for visual variety */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {salon.gallery.map((img, i) => (
            <div
              key={img.src}
              className={`overflow-hidden ${
                i === 0 || i === 3 ? "lg:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${
                  i === 0 || i === 3 ? "h-full min-h-[400px] lg:min-h-[560px]" : "aspect-square"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}