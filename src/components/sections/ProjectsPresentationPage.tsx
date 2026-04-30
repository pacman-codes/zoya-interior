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
    <ProjectsScroll count={projects.length} labels={projects.map((p) => p.title)}>
      {(activeIndex) => (
        <>
          <div className="relative h-full w-full">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);

              return (
                <section
                  key={project.title}
                  className="absolute inset-0 grid h-[100svh] grid-cols-1 items-center gap-8 px-5 pt-24 pb-8 md:grid-cols-[1.1fr_0.9fr] md:px-12 lg:px-24"
                  style={{
                    transform: `translateY(${(index - activeIndex) * 100}%)`,
                    opacity: distance > 1 ? 0 : isActive ? 1 : 0.35,
                    filter: isActive ? 'none' : 'saturate(0.6)',
                  }}
                >
                  <div className="relative h-[46svh] overflow-hidden rounded-[2rem] md:h-[74svh]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
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
                      {project.details.map((d) => (
                        <span key={d} className="rounded-full border px-4 py-2 text-xs">
                          {d}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setModalProject(project)}
                      className="mt-8 rounded-full bg-[#2d241d] px-6 py-3 text-white"
                    >
                      Смотреть проект
                    </button>
                  </div>
                </section>
              );
            })}
          </div>

          {modalProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur"
              onClick={() => setModalProject(null)}
            >
              <div
                className="relative max-w-4xl rounded-3xl bg-white p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setModalProject(null)}>×</button>
                <Image src={modalProject.modalImage} alt="" width={800} height={500} />
              </div>
            </div>
          )}
        </>
      )}
    </ProjectsScroll>
  );
}
