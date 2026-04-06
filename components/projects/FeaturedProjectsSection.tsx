'use client';

import FeaturedProjectLeaf from './projectLeaf/featuredProjectLeaf';
import ProjectsCarrousel from './projectsCarrousel';
import useIsMobile from '@/lib/hooks/useIsMobile';
import type { Project } from '@/app/types';

export default function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="grid grid-cols-1 gap-8 mb-4 mx-auto">
      {projects.map((p) => (
        <FeaturedProjectLeaf key={p.name} project={p} />
      ))}
    </div>
  ) : (
    <div>
      <ProjectsCarrousel projects={projects} />
    </div>
  );
}
