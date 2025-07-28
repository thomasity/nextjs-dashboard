import React from 'react';
import resumeData from '@/app/data/resume.json';
import { Resume, Education, Experience } from '@/app/types';
import EducationCard from '@/components/resumeCards/educationCard';
import ExperienceCard from '@/components/resumeCards/experienceCard';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { isExperienceArray, isEducationArray, isResume } from '@/lib/util';

const resume: unknown = resumeData;


export default function Page() {

  const renderData = (key: string, value: (Education | Experience)) => {

    if (key === 'education' && isEducationArray(value)) {
      return (
        <div key={key} className='items-start bg-transparent dark:bg-transparent'>
          <h2>{key}</h2>
          <section key={key}>
            {value.map((entry: Education, i: number) => (
              <EducationCard key={i} info={entry} />
            ))}
          </section>
        </div>
      );
    }

    if ((key === 'experience' || key === 'extracurriculars') && isExperienceArray(value)) {
      return (
        <div key={key} className='items-start bg-transparent dark:bg-transparent'>
          <h2>{key}</h2>
          <section key={key}>
            {value.map((entry: Experience, i: number) => (
              <ExperienceCard key={i} info={entry} />
            ))}
          </section>
        </div>
      );
    }

    if (key === 'skills' && Array.isArray(value)) {
      return (
        <div key={key} className='items-start bg-transparent dark:bg-transparent'>
          <h2>{key}</h2>
          <section key={key}>
            <Link
                    href='/projects'
                    rel='noopener noreferrer'
                    className='text-lg font-bold text-[var(--blue)] hover:underline inline-flex items-center'
                    >
                    {'-> See Projects Page <-'}
            </Link>
          </section>
        </div>
      );
    }


    return (
      null
    );
    
  };

  const renderedResume = React.useMemo(() => (
    Object.entries(resume as Resume).map(([key, value]) => renderData(key, value))
  ), [resume]);

  return (
    <main className='max-w-screen-lg mx-auto'>
      <a
          href='/resume.pdf'
          download='ThomasCallen_Resume.pdf'
          className='flex flex-row justify-between items-center px-4 py-2 bg-[var(--blue)] text-white rounded hover:bg-[var(--blue-hover)] active:bg-[var(--blue-active)] active:scale-95 text-sm'
      >
          Download Resume
          <ArrowDownTrayIcon className='h-5 w-5'/>
      </a>
        {renderedResume}
    </main>
  );

}