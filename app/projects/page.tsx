'use client';

import { useEffect, useState } from 'react';
import ProjectLeaf from '../../components/projectLeaf/projectLeaf';
import ProjectFilter from '@/components/projectFilter/projectFilter';
import projectsData from '@/app/data/projects.json'
import styles from '@/components/projectFilter/projectFilter.module.css';
import { Project } from "@/app/types";
import ProjectCrossBar from '@/components/projectCrossBar';


export default function Page() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [filter, setFilter] = useState<String>("");

  useEffect(() => {
    console.log(projects);
    if (filteredProjects.length === projectsData.length) setFilteredProjects(projects);
    else {
      const newProjects = projects.filter((project) => filteredProjects.includes(project));
      setFilteredProjects(newProjects);
    }
  
}, [projects]);

  return (
    <main className="h-[calc(100vh-6.5rem)]">
      <section className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 p-0 m-0 bg-transparent dark:bg-transparent border-none h-full w-full">
        <ProjectFilter setFilter={setFilter} setProjects={setFilteredProjects} projects={projects}/>

        <div className="bg-transparent dark:bg-transparent border-none h-full w-full flex flex-col p-0 m-0 gap-y-2 overflow-hidden">

          <section className="h-full w-full py-0">
          <ProjectCrossBar projects={projects} setProjects={setProjects} filter={filter}/>

            {projects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
                <div className={styles.scrollView}>
                  {filteredProjects.map((p) => (
                    <ProjectLeaf key={p.name} project={p} />
                  ))}
                </div>
            )}
            <p className="ml-auto mb-0 text-xs text-[var(--subtle-font-color)]">{filteredProjects.length} projects</p>
          </section>
        </div>

      </section>
    </main>
  );
}
