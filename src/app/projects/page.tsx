import { Header } from '@/components/layout/Header';
import { ProjectsPresentationPage } from '@/components/sections/ProjectsPresentationPage';

type ProjectsPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const locale = params?.lang === 'en' ? 'en' : 'ru';

  return (
    <>
      <Header locale={locale} />
      <ProjectsPresentationPage />
    </>
  );
}
