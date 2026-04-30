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
    <>
      <ProjectsScroll count={projects.length} labels={projects.map((p) => p.title)}>
        {(activeIndex) => (
          <>
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <section
                  key={project.title}
                  data-slide="true"
                  className={[
                    'grid h-[100svh] shrink-0 grid-cols-1 items-center gap-8 px-5 pt-24 pb-8 transition duration-500 md:grid-cols-[1.1fr_0.9fr] md:px-12 lg:px-24',
                    isActive ? 'opacity-100 saturate-100' : 'opacity-35 saturate-50',
                  ].join(' ')}
                >
                  <div className="relative h-[46svh] overflow-hidden rounded-[2rem] md:h-[74svh]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="max-w-xl">
                    <p className="text-xs tracking-[0.25em] text-[#a68f7a] uppercase">
                      {project.location} · {project.year} · {project.area}
                    </p>

                    <h1 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] leading-none font-light">
                      {project.title}
                    </h1>

                    <p className="mt-6 text-[#6f6255]">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-[#d6c8b7] px-4 py-2 text-xs tracking-[0.12em] text-[#7c6c5d] uppercase"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setModalProject(project)}
                      className="mt-8 rounded-full bg-[#2d241d] px-6 py-3 text-white transition hover:bg-[#4a3b30]"
                    >
                      Смотреть проект
                    </button>
                  </div>
                </section>
              );
            })}
          </>
        )}
      </ProjectsScroll>

      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur"
          onClick={() => setModalProject(null)}
        >
          <div
            className="relative max-w-4xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalProject(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-2xl"
            >
              ×
            </button>

            <Image
              src={modalProject.modalImage}
              alt={modalProject.title}
              width={900}
              height={560}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
