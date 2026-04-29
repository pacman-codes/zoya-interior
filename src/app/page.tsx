import { SiteShell } from "@/components/layout/SiteShell";
import { HomePresentationScroll } from "@/components/layout/HomePresentationScroll";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ZoyaIntro } from "@/components/sections/ZoyaIntro";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { ProjectCta } from "@/components/sections/ProjectCta";
import { Footer } from "@/components/layout/Footer";
import { getLocale } from "@/lib/i18n";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);

  return (
    <SiteShell locale={locale}>
      <HomePresentationScroll>
        <div data-slide="true" className="presentation-slide">
          <Hero locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide projects-slide">
          <FeaturedProjects locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide">
          <ZoyaIntro locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide process-slide">
          <Process locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide team-slide">
          <Team locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide cta-slide">
          <div className="flex h-full w-full flex-col justify-between">
            <ProjectCta locale={locale} />

            <Footer />
{/* old footer disabled */}
{/* className="flex justify-between px-16 pb-8 text-sm text-[var(--tone-muted)]">
              <div>studio 2026</div>

              <div className="text-right">
                <div>+7 988 142 5888</div>
                <div>Telegram</div>
                <div>vidmiaan@gmail.com</div>
              </div>
            */}
          </div>
        </div>
      </HomePresentationScroll>
    </SiteShell>
  );
}
