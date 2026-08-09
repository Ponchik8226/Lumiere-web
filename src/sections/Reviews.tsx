import { salon } from "../data/salon";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`Оценка: ${count} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i < count ? "fill-[var(--color-brand)]" : "fill-stone-300"}`}
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9 2.25 12l1.5-4.5L0 4.5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-36 bg-[var(--color-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand-dark)] mb-3">
            Клиенты
          </p>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] font-light text-[var(--color-ink)] leading-none">
            Что о нас <span className="italic">говорят</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {salon.reviews.map((review) => (
            <blockquote
              key={review.name}
              className="bg-[var(--color-surface)] p-8 flex flex-col gap-6"
            >
              <Stars count={review.rating} />
              <p className="font-display text-xl font-light text-[var(--color-ink)] leading-snug italic flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="flex items-center justify-between border-t border-stone-200 pt-5">
                <span className="text-sm font-medium text-[var(--color-ink)]">{review.name}</span>
                <span className="text-xs text-stone-400 uppercase tracking-widest">{review.date}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}