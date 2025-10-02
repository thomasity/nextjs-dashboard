import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import MarkdownWindow from '@/components/projects/markdownWindow';
import { Project } from '@/app/types';
import { TvMinimalPlay, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}


function renderLinks(project: Project) {
  const links = project.link;
  if (links) {
    return (
      <div className="space-x-2">
        {links.map((ref) => 
          ref.type === "github" ? (
            <Link href={ref.address} key={ref.type} rel='noopener noreferrer' target='_blank'>
              <button className="button-blue">
                <Github className="inline-block mr-2" size={24} />
                Code
              </button>
            </Link>
          ) : (
          <Link href={ref.address} key={ref.type} rel='noopener noreferrer' target='_blank'>
              <button className="button-red">
                <TvMinimalPlay className="inline-block mr-2" size={24} />
                Live
              </button>
            </Link>
        ))}
      </div>
    )
  }
}

function SkillList({ category, skills, project_name }: { category: string; skills: string[]; project_name: string }) {
  return (
    <div className='items-start border-b theme-border last:border-b-0 py-4'>
      <div className='p-0 m-0 mb-2 flex-row justify-between'>
          <h4 className='m-0 p-0 text-lg'>
              {`${category}${skills.length > 1 ? 's' : ''}`}:
          </h4>
      </div>
      <div className='p-0 m-0 items-start'>
          <ul className='flex flex-wrap p-0 m-0 gap-2'>
              {(skills).map((skill, index) => (
                  <li key={`${project_name}-${category}-${index}`}>
                      <p className="rounded-full bg-[var(--bg-active)] py-1 px-4 !text-sm">{skill}</p>
                  </li>
              ))}
          </ul>
      </div>
    </div>
  );
}

export default async function ProjectPage(props: ProjectPageProps) {
    const params = await props.params;
    const id = Number(params.id);
    if (Number.isNaN(id)) notFound();
    const project = await prisma.project.findUnique({ where: { id } });

    if (!project) return notFound();

    return (
      <div className="page-wrapper mt-8">
          <main className="document w-full shadow">

            <section className="border-b mb-4">
              <div className="grid grid-cols-3 border-l p-4 mb-4">
                <div className="col-span-2">
                  <p className='!text-sm !text-(--subtle-font-color)'>{project.year}</p>
                  <h1>{project.name}</h1>
                  <p className='!text-(--subtle-font-color) !text-sm'>{project.fields.join(', ')}</p>
                </div>
                <div className="col-span-1 flex flex-col items-end">
                  {renderLinks(project)}
                </div>
              </div>
                {project.image && (
                  <div className="relative overflow-hidden bg-[var(--bg-active)] border-y theme-border shadow" style={{ minHeight: '300px', height: '300px' }}>
                  <Image
                    src={project.image ? project.image : "/placeholder-image.svg"}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    sizes="100vw"
                  />
                  </div>
                )}
              <div className='p-4'>
                <div className="w-full">
                  {project.languages.length != 0 ? (
                      <SkillList category="Language" skills={project.languages} project_name={project.name} />
                    ) : (
                          null
                        )
                  }
                  {project.frameworks.length != 0 ? (
                    <SkillList category="Framework" skills={project.frameworks} project_name={project.name} />
                      ) : (
                        null
                      )
                    }
                  {project.libraries.length != 0 ? (
                    <SkillList category={project.libraries.length > 1 ? 'Librarie' : 'Library'} skills={project.libraries} project_name={project.name} />
                      ) : (
                          null
                        )
                  }
                </div>
              </div>
            </section>

            <article className="w-full col-span-3 p-4">
              <div>
                <h3 className='!text-3xl !mr-auto !font-semibold mb-4'>README.md</h3>
                {project.owner && project.repo &&<MarkdownWindow owner={project.owner} repo={project.repo} className="border theme-border h-[40rem] overflow-x-hidden" />}
              </div>
            </article>

          </main>
      </div>
    );
}
