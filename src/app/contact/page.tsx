import { SiteShell } from "@/components/layout/SiteShell";
import { Contact } from "@/components/sections/Contact";
import { getLocale } from "@/lib/i18n";

export default async function ContactPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);

  return (
    <SiteShell locale={locale}>
      <div className="[&>section]:flex [&>section]:min-h-[calc(100dvh-7rem)] [&>section]:flex-col [&>section]:justify-center [&>section]:!pt-2 sm:[&>section]:!pt-3 lg:[&>section]:!pt-4 [&>section]:!pb-4 sm:[&>section]:!pb-6">
        <Contact locale={locale} />
      </div>
    </SiteShell>
  );
}
