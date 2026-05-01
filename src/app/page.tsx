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

function getInitialSlide(slide: string | string[] | undefined) {
  const value = Array.isArray(slide) ? slide[0] : slide;

  if (value === "projects") return 1;
  if (value === "about") return 2;
  if (value === "services") return 3;
  if (value === "team") return 4;
  if (value === "contacts") return 5;

  return 0;
}

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const locale = await getLocale(Promise.resolve(searchParams));
  const initialSlide = getInitialSlide(searchParams.slide);

  return (
    <SiteShell locale={locale} hideFooter>
      <HomePresentationScroll initialSlide={initialSlide}>
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
