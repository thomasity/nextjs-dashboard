'use client';

import FeaturedProjectLeaf from '../../components/projects/projectLeaf/featuredProjectLeaf';
import { useProjects } from '@/components/projects/projectsProvider';
import ProjectControls from '@/components/projects/projectControls';


export default function Page() {
  const projects = useProjects();
 

  return (
    <main className="page-wrapper p-4">
      <section className="w-full max-w-[1400px] mb-4 border-b theme-border p-4">
        <h2 className="mr-auto !text-4xl">Featured Projects</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-4">
          {projects.map((p) => (
            p.featured &&<FeaturedProjectLeaf key={p.name} project={p} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1400px] flex flex-col items-center p-4">
        <div className="mb-8 flex flex-col items-start w-full">
          <h2 className="!text-4xl">All Projects</h2>
          <p className="text-(--subtle-font-color)">A collection of all my projects, from beginner to advanced. Filter and explore to find projects that match your interests and skill level!</p>
          <p className="text-(--subtle-font-color) italic">* Click on a project to see more details!</p>
        </div>
        <ProjectControls projects={projects}/>
      </section>
    </main>
  );
}
