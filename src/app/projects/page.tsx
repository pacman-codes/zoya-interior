import { SiteShell } from "@/components/layout/SiteShell";
import { ProjectsPresentationPage } from "@/components/sections/ProjectsPresentationPage";
import { getLocale } from "@/lib/i18n";

export default async function ProjectsPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);

  return (
    <SiteShell locale={locale}>
      <ProjectsPresentationPage locale={locale} />
    </SiteShell>
  );
}
