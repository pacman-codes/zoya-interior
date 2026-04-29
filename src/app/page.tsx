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

        <div data-slide="true" className="presentation-slide section-top-tight">
          <FeaturedProjects locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide">
          <ZoyaIntro locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide section-top-tight">
          <Process locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide section-top-tight">
          <Team locale={locale} />
        </div>

        <div data-slide="true" className="presentation-slide">
          <div className="last-slide-inner">
            <ProjectCta locale={locale} />
            <div className="absolute bottom-10 left-0 right-0">
              <Footer locale={locale} />
            </div>
          </div>
        </div>
      </HomePresentationScroll>
    </SiteShell>
  );
}
