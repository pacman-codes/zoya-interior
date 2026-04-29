import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { getLocale, t } from "@/lib/i18n";
import { safeFindBySlug } from "@/lib/safe";
import { withLang } from "@/lib/utils";

export default async function ProjectDetailsPage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await props.params;
  const locale = await getLocale(props.searchParams);
  const project = safeFindBySlug(projects, slug);

  if (!project) {
    return (
      <SiteShell locale={locale}>
        <Section>
          <div className="surface-card space-y-4 p-6">
            <p className="text-sm text-[var(--tone-muted)]">{t(locale, "projects.empty")}</p>
            <Button href={withLang("/projects", locale)} variant="ghost">
              {t(locale, "buttons.backToProjects")}
            </Button>
          </div>
        </Section>
      </SiteShell>
    );
  }

  return (
    <SiteShell locale={locale}>
      <Section title={t(locale, "sections.projectDetails")}>
        <article className="surface-card space-y-6 p-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)]">
              {project.location} • {t(locale, "projects.area")}: {project.area}
            </p>
            <h1 className="font-display text-4xl text-[var(--tone-dark)]">{project.title}</h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--tone-muted)]">
              {project.description}
            </p>
          </div>

          {project.hasStainedGlass && (
            <p className="rounded-2xl border border-[var(--tone-accent)]/70 bg-[var(--tone-light)]/45 p-4 text-sm text-[var(--tone-muted)]">
              {t(locale, "projects.stainedGlassNote")}
            </p>
          )}

          <div className="grid gap-3 sm:grid-cols-3">
            {project.gallery.map((imageName, index) => (
              <div
                key={`${imageName}-${index}`}
                className="surface-card flex min-h-40 items-end justify-start p-4 text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)]"
              >
                {imageName}
              </div>
            ))}
          </div>

          <Button href={withLang("/projects", locale)} variant="ghost">
            {t(locale, "buttons.backToProjects")}
          </Button>
        </article>
      </Section>
    </SiteShell>
  );
}
