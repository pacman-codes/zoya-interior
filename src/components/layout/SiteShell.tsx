import { Suspense } from "react";
import type { Locale } from "@/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  locale: Locale;
  children: React.ReactNode;
  hideFooter?: boolean;
};

export function SiteShell({ locale, children, hideFooter = false }: Props) {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <Header locale={locale} />
      </Suspense>

      <main>{children}</main>

      {!hideFooter ? <Footer locale={locale} /> : null}
    </div>
  );
}
