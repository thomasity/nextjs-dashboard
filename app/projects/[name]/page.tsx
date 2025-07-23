import React from 'react';
import Projects from '@/app/data/projects.json';
import { notFound } from 'next/navigation';
import MarkdownWindow from '@/components/markdownWindow';
import styles from '@/app/projects/projects.module.css';
import clsx from "clsx";


interface ProjectPageProps {
  params: {
    name: string;
  };
}


export default async function ProjectPage({ params }: ProjectPageProps) {
  const decodedName = decodeURIComponent(params.name);
  const project = Projects.find(p => p.name === decodedName);

  if (!project) return notFound();

  return (
    <main className="h-[calc(100vh-6.5rem)] flex-row justify-center gap-x-4">
        <article className={clsx(
          "h-full w-1/3 items-start",
          project.difficulty.toLowerCase() === "beginner" ? styles.beginner :
          project.difficulty.toLowerCase() === "intermediate" ? styles.intermediate :
          project.difficulty.toLowerCase() === "advanced" ? styles.advanced :
          "border-l-4 border-gray-500"
        )}>
          <div className="flex flex-row justify-between items-center m-0 p-0">
            <p className={clsx(
              "rounded-full p-2 w-fit font-bold text-[var(--font-white)] text-sm",
              project.difficulty.toLowerCase() === "beginner" ? styles.beginnerBackground :
              project.difficulty.toLowerCase() === "intermediate" ? styles.intermediateBackground :
              project.difficulty.toLowerCase() === "advanced" ? styles.advancedBackground : null)}
              >
              {project.difficulty}
            </p>
            <p className="text-sm text-[var(--subtle-font-color)]">{project.year}</p>
          </div>
          <div className="h-full flex flex-col justify-between items-start">
            <div className="p-0 m-0">
              <h1>{project.name}</h1>
              <p className="text-[var(--subtle-font-color)] text-sm">{project.fields.join(', ')}</p>
            </div>
            <div className="p-0 m-0">
              <p>{project.description}</p>
            </div>
            <div className="m-0 p-0">
                {project.languages.length != 0 ? (
                    <p className="text-sm text-[var(--subtle-font-color)]">
                        Language{project.languages.length > 1 ? 's' : null }: {project.languages.join(', ')}
                    </p>
                    ) : (
                        null
                    )
                }
                {project.frameworks.length != 0 ? (
                    <p className="text-sm text-[var(--subtle-font-color)]">
                        Framework{project.frameworks.length > 1 ? 's' : null }: {project.frameworks.join(', ')}
                    </p>
                    ) : (
                        null
                    )
                }
                {project.libraries.length != 0 ? (
                    <p className="text-sm text-[var(--subtle-font-color)]">
                        {project.libraries.length > 1 ? 'Libraries' : 'Library'}: {project.libraries.join(', ')}
                    </p>
                    ) : (
                        null
                    )
                }
            </div>

          </div>
        </article>
        <article className="w-2/3 h-full p-[1rem] overflow-hidden">
            <h3 className="p-2 mr-auto font-bold">README.md</h3>
            <MarkdownWindow name={project.name} />
        </article>
    </main>
  );
}
