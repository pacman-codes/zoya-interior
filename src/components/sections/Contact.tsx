"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n";
import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type ContactProps = {
  locale: Locale;
};

function createSchema(locale: Locale) {
  return z.object({
    name: z.string().trim().min(2, t(locale, "contact.validation.name")),
    contact: z.string().trim().min(3, t(locale, "contact.validation.contact")),
    message: z.string().trim().min(10, t(locale, "contact.validation.message")),
  });
}

export function Contact({ locale }: ContactProps) {
  const [submitError, setSubmitError] = useState("");
  const schema = createSchema(locale);
  type ContactFormData = z.infer<typeof schema>;
  const ctaButtons = [
    {
      id: "max",
      icon: "💬",
      text: "Написать в Max",
      href: "https://max.ru/u/f9LHodD0cOJwT-J-QAOH5ri9kUlcTR399VTyLNt07qfZxWc4L1thLDpZs1k",
      variant: "ghost" as const,
      external: true,
    },
    {
      id: "telegram",
      icon: "✈️",
      text: "Написать в Telegram",
      href: siteConfig.contacts.telegram,
      variant: "primary" as const,
      external: true,
    },
    {
      id: "phone",
      icon: "📞",
      text: "Позвонить",
      href: `tel:${siteConfig.contacts.phone}`,
      variant: "ghost" as const,
      external: false,
    },
    {
      id: "instagram",
      icon: "📷",
      text: "Смотреть Instagram",
      href: siteConfig.contacts.instagram,
      variant: "ghost" as const,
      external: true,
    },
    {
      id: "email",
      icon: "✉️",
      text: "Написать на почту",
      href: `mailto:${siteConfig.contacts.email}`,
      variant: "ghost" as const,
      external: false,
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", message: "" },
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      console.log("contact-form-submit", values);
      setSubmitError("");
      reset();
    } catch {
      setSubmitError(t(locale, "contact.submitError"));
    }
  };

  return (
    <Section id="contact" title={t(locale, "sections.contact")} subtitle={t(locale, "contact.subtitle")}>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">
        <div className="h-fit lg:pt-1">
          <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--tone-mid)]">
            {t(locale, "sections.contact")}
          </p>
          <div className="grid gap-2.5">
            {ctaButtons.map((item) => (
              <Button
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                variant={item.variant}
                className="w-full !min-h-9 justify-start gap-2.5 px-4 text-sm"
              >
                <span className="text-base leading-none">{item.icon}</span>
                <span className="min-w-0 truncate text-left">{item.text}</span>
              </Button>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-[1.15rem] border border-[rgb(180_167_159_/_0.5)] bg-[rgb(255_255_255_/_0.62)] p-7 sm:p-9"
        >
          <div className="space-y-5">
            <label className="block space-y-2.5">
              <span className="text-sm text-[var(--tone-muted)]">{t(locale, "contact.form.name")}</span>
              <input
                {...register("name")}
                className="w-full rounded-xl border border-[var(--line-soft)] bg-white/75 px-4 py-3 text-base outline-none transition-all duration-300 focus:border-[var(--tone-mid)]"
                placeholder={t(locale, "contact.form.placeholderName")}
              />
              {errors.name?.message && <p className="text-xs text-[var(--tone-mid)]">{errors.name.message}</p>}
            </label>

            <label className="block space-y-2.5">
              <span className="text-sm text-[var(--tone-muted)]">{t(locale, "contact.form.contact")}</span>
              <input
                {...register("contact")}
                className="w-full rounded-xl border border-[var(--line-soft)] bg-white/75 px-4 py-3 text-base outline-none transition-all duration-300 focus:border-[var(--tone-mid)]"
                placeholder={t(locale, "contact.form.placeholderContact")}
              />
              {errors.contact?.message && <p className="text-xs text-[var(--tone-mid)]">{errors.contact.message}</p>}
            </label>

            <label className="block space-y-2.5">
              <span className="text-sm text-[var(--tone-muted)]">{t(locale, "contact.form.message")}</span>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full rounded-xl border border-[var(--line-soft)] bg-white/75 px-4 py-3 text-base outline-none transition-all duration-300 focus:border-[var(--tone-mid)]"
                placeholder={t(locale, "contact.form.placeholderMessage")}
              />
              {errors.message?.message && <p className="text-xs text-[var(--tone-mid)]">{errors.message.message}</p>}
            </label>

            {submitError && <p className="text-xs text-[var(--tone-mid)]">{submitError}</p>}
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {t(locale, "buttons.send")}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
