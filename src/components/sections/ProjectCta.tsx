import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type Props = {
  locale: Locale;
};

export function ProjectCta({ locale }: Props) {
  const isRu = locale === "ru";

  return (
    <Section id="project-cta" className="!py-0">
      <div className="mx-auto w-full max-w-[92rem]">

        <div className="mb-12 flex items-center gap-6">
          <p className="shrink-0 text-[11px] uppercase tracking-[0.28em] text-[var(--tone-dark)]">
            {isRu ? "Рассказать о проекте" : "Tell about the project"}
          </p>
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="font-display text-[58px] leading-[0.9] tracking-[-0.055em] text-[var(--tone-dark)] lg:max-w-3xl lg:text-6xl">
              {isRu ? (
                <>
                  Заказать<br />
                  дизайн-проект
                </>
              ) : (
                <>
                  Order<br />
                  a design project
                </>
              )}
            </h2>

            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-[var(--tone-dark)]">
              {isRu
                ? "Оставьте имя и номер телефона. Я свяжусь с Вами, уточню задачу и предложу следующий шаг."
                : "Leave your name and phone number. I will contact you, clarify the task and suggest the next step."}
            </p>
          </div>

          <form className="w-full space-y-8 lg:mx-auto lg:max-w-xl">
            <label className="block">
              <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-[var(--tone-muted)]">
                {isRu ? "Ваше имя" : "Your name"}
              </span>
              <input
                type="text"
                name="name"
                placeholder={isRu ? "Имя" : "Name"}
                className="w-full border-b border-[var(--line-soft)] bg-transparent py-4 text-[22px] text-[var(--tone-dark)] outline-none transition placeholder:text-[var(--tone-muted)] focus:border-[var(--tone-dark)]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-[var(--tone-muted)]">
                {isRu ? "Телефон" : "Phone"}
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="+7"
                className="w-full border-b border-[var(--line-soft)] bg-transparent py-4 text-[22px] text-[var(--tone-dark)] outline-none transition placeholder:text-[var(--tone-muted)] focus:border-[var(--tone-dark)]"
              />
            </label>

            <button
              type="submit"
              className="mt-2 flex w-full justify-center rounded-full bg-[var(--tone-dark)] px-8 py-5 text-[15px] text-white transition hover:translate-y-[-2px] hover:opacity-90 lg:w-auto"
            >
              {isRu ? "Отправить заявку" : "Send request"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
