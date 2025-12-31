'use client';

import FeaturedProjectLeaf from '../../components/projects/projectLeaf/featuredProjectLeaf';
import { useProjects } from '@/components/projects/projectsProvider';
import ProjectControls from '@/components/projects/projectControls';
import { Project } from '../types';
import ProjectsCarrousel from '@/components/projects/projectsCarrousel';
import useIsMobile from '@/lib/hooks/useIsMobile';


export default function Page() {
  const projects : Project[] = useProjects();
  const isMobile = useIsMobile();
 

  return (
    <main className="page-wrapper p-4 max-w-[1400px] mx-auto">
      <section className="w-full mb-4 border-b theme-border p-4">
        <h2 className="mr-auto !text-4xl !mb-4">Featured Projects</h2>
        {isMobile ? (
          <div className="grid grid-cols-1 gap-8 mb-4 mx-auto ">
          {projects.map((p) => (
            p.featured &&<FeaturedProjectLeaf key={p.name} project={p} />
          ))}
        </div>) : (
          <div>
            <ProjectsCarrousel projects={projects.filter(p => p.featured)} />
          </div>
        )}
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
