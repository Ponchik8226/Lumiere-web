import { salon } from "../data/salon";

export default function Masters() {
  return (
    <section id="masters" className="py-24 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand-dark)] mb-3">
            Команда
          </p>
          <h2 className="font-display text-[clamp(36px,6vw,72px)] font-light text-[var(--color-ink)] leading-none">
            Наши <span className="italic">мастера</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {salon.masters.map((master) => (
            <article key={master.name} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden mb-6">
                <img
                  src={master.photo}
                  alt={`Мастер ${master.name}`}
                  className="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Info */}
              <div className="border-t border-stone-300 pt-5">
                <h3 className="font-display text-2xl font-light text-[var(--color-ink)] mb-1">
                  {master.name}
                </h3>
                <p className="text-xs tracking-widest uppercase text-[var(--color-brand-dark)] mb-3">
                  {master.role}
                </p>
                <p className="text-sm text-[var(--color-ink-soft)] font-light leading-relaxed">
                  {master.bio}
                </p>
                <p className="mt-3 text-xs text-stone-400 uppercase tracking-widest">
                  {master.exp}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}