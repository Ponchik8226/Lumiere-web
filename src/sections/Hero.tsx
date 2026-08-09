import { salon } from "../data/salon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch bg-[var(--color-ink)] overflow-hidden">
      {/* Left: text column */}
      <div className="relative z-10 flex flex-col justify-between w-full lg:w-1/2 px-8 lg:px-16 pt-32 pb-12 lg:pt-36 lg:pb-16">
        {/* Top label */}
        <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand)] font-light">
          {salon.city} · {salon.tagline}
        </p>

        {/* Main headline */}
        <div className="mt-auto">
          <h1 className="font-display text-white font-light leading-none">
            <span className="block text-[clamp(64px,10vw,120px)] tracking-tight italic text-[var(--color-brand)]">
              Студия
            </span>
            <span className="block text-[clamp(48px,8vw,96px)] tracking-widest uppercase mt-1">
              красоты
            </span>
            <span className="block text-[clamp(64px,10vw,120px)] tracking-tight font-light mt-0">
              {salon.name}
            </span>
          </h1>

          <p className="mt-8 text-stone-400 text-sm lg:text-base font-light max-w-sm leading-relaxed">
            Пространство для тех, кто ценит своё время и знает, что хороший результат
            требует настоящего мастерства.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[var(--color-brand)] text-[var(--color-ink)] text-xs tracking-widest uppercase px-7 py-4 hover:bg-white transition-colors duration-300 font-medium"
            >
              Записаться
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 border border-stone-600 text-stone-400 text-xs tracking-widest uppercase px-7 py-4 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors duration-300"
            >
              Услуги и цены
            </a>
          </div>
        </div>

        {/* Bottom: hours */}
        <div className="mt-16 flex items-center gap-3">
          <span className="w-8 h-px bg-[var(--color-brand-dark)]" aria-hidden="true" />
          <p className="text-xs text-stone-500 tracking-widest uppercase">{salon.hours}</p>
        </div>
      </div>

      {/* Right: photo */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%]">
        <img
          src="/images/hero.jpg"
          alt="Интерьер студии красоты LUMIÈRE"
          className="w-full h-full object-cover"
        />
        {/* dark overlay for blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />
      </div>

      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden opacity-20">
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase text-stone-500 [writing-mode:vertical-rl]">
          Прокрутите вниз
        </span>
        <span className="w-px h-12 bg-stone-700 animate-pulse" aria-hidden="true" />
      </div>
    </section>
  );
}