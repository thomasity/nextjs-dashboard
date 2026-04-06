import type { Metadata } from 'next';
import FeaturedProjectsSection from '@/components/projects/FeaturedProjectsSection';
import ProjectControls from '@/components/projects/projectControls';
import type { Project } from '../types';
import rawProjectData from '@/app/data/projects.json';

export const metadata: Metadata = {
  title: 'Projects | Thomas Callen',
  description: 'Browse all of Thomas Callen\'s software projects — from embedded systems and cloud infrastructure to full-stack web apps.',
};

const projects = rawProjectData as unknown as Project[];

export default function Page() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="page-wrapper p-4 max-w-350 mx-auto">
      <section className="w-full mb-4 border-b theme-border p-4">
        <h2 className="mr-auto text-4xl! mb-4!">Featured Projects</h2>
        <FeaturedProjectsSection projects={featuredProjects} />
      </section>

      <section className="w-full max-w-350 flex flex-col items-center p-4">
        <div className="mb-8 flex flex-col items-start w-full">
          <h2 className="text-4xl!">All Projects</h2>
          <p className="text-(--subtle-font-color)">A collection of all my projects, from beginner to advanced. Filter and explore to find projects that match your interests and skill level!</p>
          <p className="text-(--subtle-font-color) italic">* Click on a project to see more details!</p>
        </div>
        <ProjectControls projects={projects} />
      </section>
    </main>
  );
}
