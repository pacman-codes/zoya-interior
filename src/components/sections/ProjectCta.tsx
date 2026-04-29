import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type Props = {
  locale: Locale;
};

export function ProjectCta({ locale }: Props) {
  const isRu = locale === "ru";

  return (
    <Section id="project-cta" className="flex-1 !py-0">
      <div className="grid w-full gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="self-center">
          <div className="mb-8 flex items-center gap-6">
            <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-[var(--tone-muted)]">
              {isRu ? "Рассказать о проекте" : "Tell about the project"}
            </p>
            <div className="h-px flex-1 bg-[var(--line-soft)]" />
          </div>

          <h2 className="max-w-3xl font-display text-5xl leading-tight text-[var(--tone-dark)] sm:text-6xl">
            {isRu ? "Заказать дизайн-проект" : "Order an interior design project"}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--tone-muted)]">
            {isRu
              ? "Для начала работы заполните ваше имя и номер телефона. Я свяжусь с Вами и мы обсудим все детали."
              : "To get started, leave your name and phone number. I will contact you and we will discuss the details."}
          </p>
        </div>

        <form className="mx-auto w-full max-w-xl self-center space-y-7">
          <label className="block">
            <span className="mb-3 block text-xs uppercase tracking-[0.18em] text-[var(--tone-muted)]">
              {isRu ? "Ваше имя" : "Your name"}
            </span>
            <input
              type="text"
              name="name"
              placeholder={isRu ? "Имя" : "Name"}
              className="w-full border-b border-[var(--line-soft)] bg-transparent py-4 text-xl text-[var(--tone-dark)] outline-none transition placeholder:text-[var(--tone-muted)] focus:border-[var(--tone-dark)]"
            />
          </label>

          <label className="block">
            <span className="mb-3 block text-xs uppercase tracking-[0.18em] text-[var(--tone-muted)]">
              {isRu ? "Телефон" : "Phone"}
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="+7"
              className="w-full border-b border-[var(--line-soft)] bg-transparent py-4 text-xl text-[var(--tone-dark)] outline-none transition placeholder:text-[var(--tone-muted)] focus:border-[var(--tone-dark)]"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex rounded-full bg-[var(--tone-dark)] px-8 py-4 text-sm text-white transition hover:opacity-80"
          >
            {isRu ? "Отправить заявку" : "Send request"}
          </button>
        </form>
      </div>
    </Section>
  );
}
