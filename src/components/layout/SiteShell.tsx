import type { Locale } from "@/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: Props) {
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
