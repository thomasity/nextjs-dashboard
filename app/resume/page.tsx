import React from 'react';
import resumeData from '@/app/data/resume.json';
import { Education, Experience, Skill } from '@/app/types';
import EducationCard from '@/components/resumeCards/educationCard';
import ExperienceCard from '@/components/resumeCards/experienceCard';
import SkillCard from '@/components/resumeCards/skillCard';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';


export default function Page() {

  const renderData = (key: string, value: any) => {

    if (key === "Name" || key === "Contact Information") {
      return null;
    }

    if (key === "Summary") {
      // if (typeof value === "string") {
      //   return (
      //     <p key={key}>{value}</p>
      //   )
      // }
      return null;
    }

    if (key === "Education" && Array.isArray(value)) {
      return (
        <div key={key} className="items-start bg-transparent dark:bg-transparent">
          <h2>{key}</h2>
          <section key={key}>
            {value.map((entry: Education, i: number) => (
              <EducationCard key={i} info={entry} />
            ))}
          </section>
        </div>
      );
    }

    if ((key === "Work Experience" || key === "Extracurriculars") && Array.isArray(value)) {
      return (
        <div key={key} className="items-start bg-transparent dark:bg-transparent">
          <h2>{key}</h2>
          <section key={key}>
            {value.map((entry: Experience, i: number) => (
              <ExperienceCard key={i} info={entry} />
            ))}
          </section>
        </div>
      );
    }

    if (key === "Skills" && Array.isArray(value)) {
      return (
        <div key={key} className="items-start bg-transparent dark:bg-transparent">
          <h2>{key}</h2>
          <section key={key}>
            <Link
                    href="/projects"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-[var(--blue)] hover:underline inline-flex items-center"
                    >
                    {`-> See Projects Page <-`}
            </Link>
            {/* {value.map((entry: Skill, i: number) => (
              <SkillCard key={i} info={entry} />
            ))} */}
          </section>
        </div>
      );
    }


    return (
      <div key={key} className="items-start bg-transparent dark:bg-transparent">
        <h3>{key}</h3>
        <section>
          djfsdkfjsdklf
        </section>
      </div>
    )
    
  };

  const renderedResume = React.useMemo(() => (
    Object.entries(resumeData).map(([key, value]) => renderData(key, value))
  ), []);

  return (
    <main className="max-w-screen-lg mx-auto">
      <a
          href="/resume.pdf"
          download="ThomasCallen_Resume.pdf"
          className="flex flex-row justify-between items-center px-4 py-2 bg-[var(--blue)] text-white rounded hover:bg-[var(--blue-hover)] active:bg-[var(--blue-active)] active:scale-95 text-sm"
      >
          Download Resume
          <ArrowDownTrayIcon className="h-5 w-5"/>
      </a>
        {renderedResume}
    </main>
  );

}