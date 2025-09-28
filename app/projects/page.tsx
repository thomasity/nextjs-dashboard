'use client';

import { use, useEffect, useState } from 'react';
import ProjectLeaf from '../../components/projectLeaf/projectLeaf';
import ProjectFilter from '@/components/projectFilter/projectFilter';
import projectsData from '@/app/data/projects.json';
import styles from './projects.module.css';
import { Project } from '@/app/types';
import ProjectCrossBar from '@/components/projectCrossBar/projectCrossBar';
import useIsMobile from '@/lib/hooks/useIsMobile';


export default function Page() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [filter, setFilter] = useState<string>('');
  const isMobile = useIsMobile();

  useEffect(() => {
    if (filteredProjects.length === projectsData.length) setFilteredProjects(projects);
    else {
      const newProjects = projects.filter((project) => filteredProjects.includes(project));
      setFilteredProjects(newProjects);
    }
  
  }, [projects]);

  return (
    <main className="page-wrapper">
      <section className="w-full max-w-[80%]">
        <h2 className="mr-auto mb-4">Featured Projects</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {projectsData.slice(0, 3).map((p) => (
            <ProjectLeaf key={p.name} project={p} />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[80%] mb-4">
        <p className="text-(--subtle-font-color) italic">* Click on a project to see more details!</p>
      </section>
      <section className="w-full max-w-[80%] mb-4">
        <hr className="border-t border-(--border-color)" />
      </section>
      <section className="w-full max-w-[80%] flex flex-col items-center">
        <h2 className="mr-auto">All Projects</h2>
        <p className="text-(--subtle-font-color) mr-auto">A collection of all my projects, from beginner to advanced. Filter and explore to find projects that match your interests and skill level!</p>
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
              {!isMobile && <p className='!ml-auto !mb-0 !text-xs !text-(--subtle-font-color)'>{filteredProjects.length} projects</p>}
            </section>
          </div>

        </div>
      </section>
    </main>
  );
}
