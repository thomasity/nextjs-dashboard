import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import MarkdownWindow from '@/components/projects/markdownWindow';
import type { Project as UIProject } from '@/app/types';
import { TvMinimalPlay, Github } from 'lucide-react';
import Image from 'next/image';
import rawProjectData from '@/app/data/projects.json';

const projects = rawProjectData as unknown as UIProject[];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === Number(id));
  if (!project) return { title: 'Project Not Found | Thomas Callen' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tommycallen.com';

  return {
    title: `${project.name} | Thomas Callen`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url: `${siteUrl}/projects/${project.id}`,
      images: project.image ? [{ url: `${siteUrl}${project.image}`, alt: project.name }] : [],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

function renderLinks(project: UIProject) {
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
          )
        )}
      </div>
    );
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
          {skills.map((skill, index) => (
            <li key={`${project_name}-${category}-${index}`}>
              <p className="rounded-full bg-(--bg-active) py-1 px-4 text-sm!">{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === Number(id));

  if (!project) notFound();

  return (
    <div className="page-wrapper mt-8">
      <main className="w-full lg:max-w-[60%] shadow">

        {/* Title header — full width, above hero */}
        <div className="p-4 border-b theme-border flex flex-wrap items-start justify-between gap-3">
          <div className="border-l pl-4">
            <p className='text-sm! text-(--subtle-font-color)!'>{project.year}</p>
            <h1 className='text-2xl!'>{project.name}</h1>
            {project.fields && Array.isArray(project.fields) && (
              <p className='text-(--subtle-font-color)! text-sm!'>{project.fields.join(', ')}</p>
            )}
          </div>
          {renderLinks(project)}
        </div>

        {/* Full-width hero image */}
        {project.image && (
          <div className="relative overflow-hidden bg-(--bg-active) border-b theme-border" style={{ height: '420px' }}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{ objectFit: 'contain' }}
              priority
              sizes="(min-width: 1280px) 80vw, 100vw"
            />
          </div>
        )}

        <div className="grid xl:grid-cols-4 grid-cols-1">
          {/* Sidebar — desktop only */}
          <aside className="hidden xl:flex xl:flex-col col-span-1 border-r theme-border p-4">
            {project.description && (
              <>
                <h3 className=" m-0 p-0">Description: </h3>
                <p className='text-sm! mt-4 border-b theme-border pb-4'>{project.description}</p>
              </>
            )}
            <div className="mt-4">
              {project.languages && project.languages.length > 0 && (
                <SkillList category="Language" skills={project.languages} project_name={project.name} />
              )}
              {project.frameworks && project.frameworks.length > 0 && (
                <SkillList category="Framework" skills={project.frameworks} project_name={project.name} />
              )}
              {project.libraries && project.libraries.length > 0 && (
                <SkillList category={project.libraries.length > 1 ? 'Librarie' : 'Library'} skills={project.libraries} project_name={project.name} />
              )}
              {project.platforms && project.platforms.length > 0 && (
                <SkillList category="Platform" skills={project.platforms} project_name={project.name} />
              )}
            </div>
          </aside>

          {/* Main content: (mobile: description+skills) + markdown */}
          <div className="xl:col-span-3 min-w-0">
            {/* Mobile-only: description + skills between hero and readme */}
            <div className="xl:hidden p-4 border-b theme-border">
              {project.description && (
                <p className='text-sm! mb-4'>{project.description}</p>
              )}
              {project.languages && project.languages.length > 0 && (
                <SkillList category="Language" skills={project.languages} project_name={project.name} />
              )}
              {project.frameworks && project.frameworks.length > 0 && (
                <SkillList category="Framework" skills={project.frameworks} project_name={project.name} />
              )}
              {project.libraries && project.libraries.length > 0 && (
                <SkillList category={project.libraries.length > 1 ? 'Librarie' : 'Library'} skills={project.libraries} project_name={project.name} />
              )}
              {project.platforms && project.platforms.length > 0 && (
                <SkillList category="Platform" skills={project.platforms} project_name={project.name} />
              )}
            </div>

            <article className="p-4">
              <p className='text-xs! text-(--subtle-font-color)! font-mono mb-3 tracking-wide uppercase'>README.md</p>
              {project.owner && project.repo && (
                <MarkdownWindow owner={project.owner} repo={project.repo} className="border theme-border overflow-x-hidden" />
              )}
            </article>
          </div>
        </div>

      </main>
    </div>
  );
}
