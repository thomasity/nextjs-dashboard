import { useState, useEffect } from 'react';
import { Project } from "@/app/types";
import ProjectFilter from './projectFilter/projectFilter';
import ProjectCrossBar from './projectCrossBar/projectCrossBar';
import ProjectLeaf from './projectLeaf/projectLeaf';





export default function ProjectControls({ projects } : { projects: Project[]}) {
    const [localProjects, setLocalProjects] = useState<Project[]>(projects)
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(localProjects);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        if (filteredProjects.length === localProjects.length) setFilteredProjects(localProjects);
        else {
        const newProjects = localProjects.filter((project) => filteredProjects.includes(project));
        setFilteredProjects(newProjects);
        }
    
    }, [localProjects]);

    return (

        <section className="w-full grid grid-cols-5 gap-8 border theme-border p-8 rounded-xl shadow">
            <ProjectFilter setFilter={setFilter} setProjects={setFilteredProjects} projects={localProjects} className="col-span-1 w-full mt-8 sm:block hidden"/>
            <div className="sm:col-span-4 col-span-5 w-full">
                <ProjectCrossBar projects={localProjects} setProjects={setLocalProjects} filter={filter} />

                {filteredProjects ? (
                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 p-4 border-2 theme-border h-[35rem] overflow-x-hidden overflow-y-scroll bg-[var(--bg-hover)]">
                    {filteredProjects.map((p) => (
                        <ProjectLeaf key={p.name} project={p} />
                    ))}
                    </div>
                ) : (
                <p>No projects found.</p>
                )}
                {filteredProjects && <p className='text-right mt-2 !text-sm text-(--subtle-font-color) sm:block hidden'>{filteredProjects.length} projects</p>}
          </div>
      </section>
    )


};