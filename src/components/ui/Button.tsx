import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

type BaseButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--tone-dark)] bg-[var(--tone-dark)] !text-white shadow-[0_16px_34px_-20px_rgba(44,34,32,0.9)] hover:-translate-y-0.5 hover:bg-[var(--tone-muted)] hover:!text-white focus-visible:!text-white disabled:!text-white disabled:border-[var(--tone-mid)] disabled:bg-[var(--tone-mid)]",
  ghost:
    "border border-[var(--line-soft)] bg-white/82 text-[var(--tone-dark)] hover:-translate-y-0.5 hover:bg-[var(--tone-light)]/35 disabled:text-[var(--tone-muted)]",
};

function baseClass(variant: ButtonVariant, className?: string): string {
  return cn(
    "inline-flex min-h-12 max-w-full items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.06em] transition-all duration-300 disabled:cursor-not-allowed sm:min-h-13 sm:px-7",
    variantClassMap[variant],
    className,
  );
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  if ("href" in props && props.href) {
    const { children, className, href, target, rel, variant = "primary" } = props;
    return (
      <Link href={href} target={target} rel={rel} className={baseClass(variant, className)}>
        {children}
      </Link>
    );
  }

  const { children, className, type = "button", variant = "primary", ...rest } =
    props as NativeButtonProps;

  return (
    <button type={type} className={baseClass(variant, className)} {...rest}>
      {children}
    </button>
  );
}
