'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ProjectsScroll } from '@/components/layout/ProjectsScroll';

type Project = {
  title: string;
  location: string;
  year: string;
  area: string;
  image: string;
  modalImage: string;
  description: string;
  details: string[];
};

const projects: Project[] = [
  {
    title: 'Квартира в Сочи',
    location: 'Сочи',
    year: '2024',
    area: '86 м²',
    image: '/images/projects/sochi-apartment/cover.jpg',
    modalImage: '/images/projects/sochi-apartment/01.jpg',
    description:
      'Спокойный интерьер для жизни у моря: мягкая палитра, натуральные фактуры, продуманное хранение и сценарии света.',
    details: ['Полный дизайн-проект', 'Авторский надзор', 'Комплектация'],
  },
  {
    title: 'Семейный дом',
    location: 'Краснодарский край',
    year: '2023',
    area: '180 м²',
    image: '/images/projects/family-house/cover.jpg',
    modalImage: '/images/projects/family-house/01.jpg',
    description:
      'Тёплый дом для семьи: приватные зоны, общая гостиная, спокойная база и акцент на долговечные материалы.',
    details: ['Планировочное решение', 'Рабочая документация', 'Подбор материалов'],
  },
  {
    title: 'Ресторан',
    location: 'Сочи',
    year: '2024',
    area: '140 м²',
    image: '/images/projects/restaurant/cover.jpg',
    modalImage: '/images/projects/restaurant/01.jpg',
    description:
      'Интерьер с атмосферой вечернего города: выразительные фактуры, мягкий свет и запоминаемая посадочная зона.',
    details: ['Концепция', 'Визуализация', 'Рабочие чертежи'],
  },
  {
    title: 'Офис',
    location: 'Москва',
    year: '2023',
    area: '120 м²',
    image: '/images/projects/office/cover.jpg',
    modalImage: '/images/projects/office/01.jpg',
    description:
      'Сдержанное рабочее пространство без визуального шума: переговорные, открытая зона и спокойные материалы.',
    details: ['Концепция пространства', 'Мебельные решения', 'Световые сценарии'],
  },
];

export function ProjectsPresentationPage() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <ProjectsScroll count={projects.length} labels={projects.map((project) => project.title)}>
      {(activeIndex, setActiveIndex) => (
        <>
          <div className="relative h-full w-full">
            {projects.map((project, index) => {
              const distance = Math.abs(index - activeIndex);
              const isActive = index === activeIndex;

              return (
                <section
                  key={project.title}
                  className="absolute inset-0 grid h-[100svh] grid-cols-1 items-center gap-8 px-5 pt-24 pb-8 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] md:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)] md:px-12 lg:px-24"
                  style={{
                    transform: `translateY(${(index - activeIndex) * 100}%)`,
                    opacity: distance > 1 ? 0 : isActive ? 1 : 0.32,
                    filter: isActive ? 'saturate(1) brightness(1)' : 'saturate(0.55) brightness(1.05)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="relative h-[46svh] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(72,54,38,0.16)] md:h-[74svh]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mx-auto flex max-w-xl flex-col items-start">
                    <p className="mb-4 text-xs tracking-[0.28em] text-[#a68f7a] uppercase">
                      {project.location} · {project.year} · {project.area}
                    </p>

                    <h1 className="text-[clamp(2.4rem,5vw,5.8rem)] leading-[0.95] font-light tracking-[-0.06em] text-[#2d241d]">
                      {project.title}
                    </h1>

                    <p className="mt-6 max-w-md text-base leading-7 text-[#6f6255] md:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-[#d6c8b7] bg-[#f7f1e9]/75 px-4 py-2 text-xs tracking-[0.12em] text-[#7c6c5d] uppercase"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setModalProject(project)}
                        className="rounded-full bg-[#2d241d] px-6 py-3 text-sm tracking-[0.12em] text-[#f8f1e8] uppercase transition hover:bg-[#4a3b30]"
                      >
                        Смотреть проект
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveIndex(Math.min(projects.length - 1, activeIndex + 1))}
                        className="rounded-full border border-[#cdbdab] px-6 py-3 text-sm tracking-[0.12em] text-[#5f5247] uppercase transition hover:border-[#a68f7a] hover:text-[#a68f7a]"
                      >
                        Следующий
                      </button>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {modalProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1712]/45 px-4 py-6 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label={modalProject.title}
              onMouseDown={() => setModalProject(null)}
            >
              <div
                className="relative grid max-h-[88svh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#eadfce] bg-[#f7f1e9] shadow-[0_34px_120px_rgba(28,22,16,0.35)] md:grid-cols-[1.05fr_0.95fr]"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#f7f1e9]/85 text-2xl leading-none text-[#3a2f27] shadow-sm transition hover:bg-white"
                  aria-label="Закрыть"
                >
                  ×
                </button>

                <div className="relative min-h-[280px] md:min-h-[620px]">
                  <Image
                    src={modalProject.modalImage}
                    alt={modalProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>

                <div className="overflow-y-auto p-7 md:p-10">
                  <p className="text-xs tracking-[0.28em] text-[#a68f7a] uppercase">
                    {modalProject.location} · {modalProject.year} · {modalProject.area}
                  </p>

                  <h2 className="mt-5 text-4xl leading-none font-light tracking-[-0.05em] text-[#2d241d] md:text-6xl">
                    {modalProject.title}
                  </h2>

                  <p className="mt-7 text-base leading-7 text-[#6f6255]">
                    {modalProject.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {modalProject.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center justify-between border-b border-[#ded0bf] pb-3 text-sm text-[#5f5247]"
                      >
                        <span>{detail}</span>
                        <span className="text-[#a68f7a]">✓</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/#contacts"
                    className="mt-9 inline-flex rounded-full bg-[#2d241d] px-6 py-3 text-sm tracking-[0.12em] text-[#f8f1e8] uppercase transition hover:bg-[#4a3b30]"
                  >
                    Обсудить похожий проект
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </ProjectsScroll>
  );
}
