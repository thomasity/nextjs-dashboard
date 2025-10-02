'use client';

import { use, useEffect, useState } from 'react';
import ProjectLeaf from '../../components/projects/projectLeaf/projectLeaf';
import FeaturedProjectLeaf from '../../components/projects/projectLeaf/featuredProjectLeaf';
import ProjectFilter from '@/components/projects/projectFilter/projectFilter';
import projectsData from '@/app/data/projects.json';
import styles from './projects.module.css';
import { Project } from '@/app/types';
import ProjectCrossBar from '@/components/projects/projectCrossBar/projectCrossBar';
import useIsMobile from '@/lib/hooks/useIsMobile';


export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [filter, setFilter] = useState<string>('');
  const isMobile = useIsMobile();

  
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/api/projects', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = (await res.json()) as Project[];
        console.log(data);
        setTotalProjects(data.length);
        if (!cancelled) {
          setProjects(data);
          setFilteredProjects(data);
        }
      } catch (e) {
        console.warn('Falling back to bundled projectsData due to fetch error:', e);
        // keep the initial projectsData fallback
      }
    })();

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (filteredProjects.length === totalProjects) setFilteredProjects(projects);
    else {
      const newProjects = projects.filter((project) => filteredProjects.includes(project));
      setFilteredProjects(newProjects);
    }
  
  }, [projects]);

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
      <div className={`${styles['component-wrapper']} w-full`}>
        {!isMobile && <ProjectFilter setFilter={setFilter} setProjects={setFilteredProjects} projects={projects}/>}
        <div className={styles['projects-wrapper']}>

          <section className={styles['projects-body']}>
            <ProjectCrossBar projects={projects} setProjects={setProjects} filter={filter}/>

            {projects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
                <div className={styles['scroll-view']}>
                  {filteredProjects.map((p) => (
                    <ProjectLeaf key={p.name} project={p} />
                  ))}
                </div>
            )}
            {!isMobile && <p className='text-right mt-2 !text-sm text-(--subtle-font-color)'>{filteredProjects.length} projects</p>}
          </section>
        </div>

      </div>
    </section>
  </main>
  );
}
