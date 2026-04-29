"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "w-full max-w-full min-w-0 pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-7 lg:pb-12",
        className,
      )}
    >
      {(title || subtitle) && (
        <header className="mb-5 space-y-2 sm:mb-6">
          {title && (
            <h2 className="font-display text-4xl leading-tight text-[var(--tone-dark)] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-3xl text-base leading-relaxed text-[var(--tone-muted)] sm:text-lg">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </motion.section>
  );
}
