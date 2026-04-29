import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Locale } from "@/i18n";
import { withLang } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link href={withLang(`/projects/${project.slug}`, locale)} className="group block min-w-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.1rem] bg-[var(--tone-light)]/45">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 84vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4 space-y-1.5">
        <h3 className="font-display text-[1.08rem] leading-tight text-[var(--tone-dark)] sm:text-[1.18rem]">
          {project.title}
        </h3>
        <p className="text-[11px] tracking-[0.02em] text-[var(--tone-muted)]">
          {project.location} · {project.area}
        </p>
      </div>
    </Link>
  );
}
