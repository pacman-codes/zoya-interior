"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProjectsScroll } from "@/components/layout/ProjectsScroll";

export function ProjectsPresentationPage({ locale }: { locale: "ru" | "en" }) {
  const isRu = locale === "ru";

  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  const projects = [
    {
      id: "1",
      title: isRu ? "Квартира в Сочи" : "Apartment in Sochi",
      meta: isRu ? "Сочи · 82 м²" : "Sochi · 82 m²",
      cover: "/images/projects/sochi-apartment/cover.jpg",
      images: ["/images/projects/sochi-apartment/cover.jpg"],
      description: isRu ? "Спокойный интерьер." : "Calm interior.",
    },
    {
      id: "2",
      title: isRu ? "Семейный дом" : "Family house",
      meta: isRu ? "180 м²" : "180 m²",
      cover: "/images/projects/family-house/cover.jpg",
      images: ["/images/projects/family-house/cover.jpg"],
      description: isRu ? "Дом для семьи." : "Family house.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;
        const i = Number(visible.target.getAttribute("data-project-index"));
        setActiveIndex(i);
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ProjectsScroll>
      {projects.map((p, i) => (
        <section
          key={p.id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          data-project="true"
          data-project-index={i}
          className={`h-[100svh] grid lg:grid-cols-2 gap-10 px-12 items-center transition duration-500 ${
            i === activeIndex ? "opacity-100" : "opacity-30"
          }`}
        >
          <div
            className="relative h-[420px] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setActiveProject(p)}
          >
            <Image src={p.cover} alt="" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-5xl">{p.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{p.meta}</p>
            <p className="mt-6">{p.description}</p>

            <button
              onClick={() => setActiveProject(p)}
              className="mt-6 border-b"
            >
              {isRu ? "Подробнее →" : "Details →"}
            </button>
          </div>
        </section>
      ))}

      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center p-6">
          <div className="w-[900px] max-w-full max-h-[85vh] bg-white rounded-2xl p-8 overflow-auto shadow-2xl">
            <button onClick={() => setActiveProject(null)}>
              {isRu ? "Закрыть" : "Close"}
            </button>

            <h2 className="text-3xl mt-4">{activeProject.title}</h2>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {activeProject.images.map((img: string) => (
                <div key={img} className="relative h-[200px]">
                  <Image src={img} alt="" fill className="object-cover rounded-lg" />
                </div>
              ))}
            </div>

            <p className="mt-6">{activeProject.description}</p>
          </div>
        </div>
      )}
    </ProjectsScroll>
  );
}
