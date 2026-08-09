import { useState } from "react";
import { salon } from "../data/salon";

type FormState = {
  name: string;
  phone: string;
  service: string;
  comment: string;
};

type Status = "idle" | "success";

const allServices = salon.services.flatMap((cat) =>
  cat.items.map((item) => `${cat.category}: ${item.name}`)
);

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    comment: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = import.meta.env.VITE_TG_TOKEN as string;
    const chatId = "7991689715";

    const text = [
      "📋 *Новая заявка с сайта LUMIÈRE*",
      "",
      `👤 *Имя:* ${form.name}`,
      `📞 *Телефон:* ${form.phone}`,
      form.service ? `💅 *Услуга:* ${form.service}` : null,
      form.comment ? `💬 *Комментарий:* ${form.comment}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", service: "", comment: "" });
      } else {
        alert("Ошибка отправки. Попробуйте позвонить нам напрямую.");
      }
    } catch {
      alert("Ошибка соединения. Попробуйте позвонить нам напрямую.");
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-brand)] mb-4">
              Запись
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-light text-white leading-tight mb-10">
              Запишитесь <br />
              <span className="italic text-[var(--color-brand)]">прямо сейчас</span>
            </h2>

            <div className="space-y-6">
              <ContactLine label="Адрес" value={salon.address} />
              <ContactLine label="Телефон" value={salon.phone} href={`tel:${salon.phone}`} />
              <ContactLine label="Режим работы" value={salon.hours} />
            </div>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${salon.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-stone-600 text-stone-300 text-xs tracking-widest uppercase px-6 py-4 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.12 1.524 5.847L0 24l6.334-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.76.894.944-3.653-.234-.375A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.421-4.398 9.818-9.818 9.818z" />
              </svg>
              Написать в WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand)] flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-[var(--color-brand)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-light text-white mb-3">Заявка отправлена</h3>
                <p className="text-stone-400 font-light mb-8">
                  Мы свяжемся с вами в течение одного часа для подтверждения записи.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs tracking-widest uppercase text-stone-400 border-b border-stone-600 pb-px hover:text-white hover:border-white transition-colors"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <FormField
                  label="Ваше имя"
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Анна"
                />
                <FormField
                  label="Телефон"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (999) 000-00-00"
                />

                {/* Service select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs tracking-widest uppercase text-stone-400">
                    Услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-transparent border-b border-stone-600 text-white py-3 text-sm font-light focus:outline-none focus:border-[var(--color-brand)] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[var(--color-ink)] text-stone-400">Выберите услугу</option>
                    {allServices.map((s) => (
                      <option key={s} value={s} className="bg-[var(--color-ink)]">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Comment */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="comment" className="text-xs tracking-widest uppercase text-stone-400">
                    Комментарий <span className="normal-case tracking-normal">(необязательно)</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Пожелания, удобное время..."
                    className="bg-transparent border-b border-stone-600 text-white py-3 text-sm font-light focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none placeholder:text-stone-600"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[var(--color-brand)] text-[var(--color-ink)] text-xs tracking-widest uppercase py-4 hover:bg-white transition-colors duration-300 font-medium"
                >
                  Отправить заявку
                </button>

                <p className="text-xs text-stone-600 font-light text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-t border-stone-800 pt-5">
      <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-stone-300 font-light hover:text-[var(--color-brand)] transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-stone-300 font-light">{value}</p>
      )}
    </div>
  );
}

type InputProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
};

function FormField({ label, id, name, type, value, onChange, required, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs tracking-widest uppercase text-stone-400">
        {label}
        {required && <span className="text-[var(--color-brand)] ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-stone-600 text-white py-3 text-sm font-light focus:outline-none focus:border-[var(--color-brand)] transition-colors placeholder:text-stone-600"
      />
    </div>
  );
}