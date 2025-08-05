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
    <main className={styles['page-wrapper']}>
      <section className={styles['component-wrapper']}>
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
            <p className='!ml-auto !mb-0 !text-xs !text-(--subtle-font-color)'>{filteredProjects.length} projects</p>
          </section>
        </div>

      </section>
    </main>
  );
}
