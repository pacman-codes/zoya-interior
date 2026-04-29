import { SiteShell } from "@/components/layout/SiteShell";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { getLocale, t } from "@/lib/i18n";
import { safeArray } from "@/lib/safe";

export default async function ProjectsPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);

  return (
    <SiteShell locale={locale}>
      <Section
        title={t(locale, "sections.allProjects")}
        className="min-h-[calc(100dvh-7rem)] !pt-3 sm:!pt-4 lg:!pt-5 !pb-6 sm:!pb-8 lg:!pb-10"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:gap-5">
          {safeArray(projects).map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
