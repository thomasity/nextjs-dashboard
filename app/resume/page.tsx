import React from 'react';
import resumeData from '@/app/data/resume.json';
import { Resume, Education, Experience } from '@/app/types';
import EducationCard from '@/components/resumeCards/educationCard';
import ExperienceCard from '@/components/resumeCards/experienceCard';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { isExperienceArray, isEducationArray } from '@/lib/util';
import styles from './resume.module.css';

const resume: unknown = resumeData;


export default function Page() {

  const renderData = (key: string, value: (Education | Experience)) => {

    if (key === 'education' && isEducationArray(value)) {
      return (
        <div key={key} className={styles.sectionWrapper}>
          <h2>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</h2>
          <section className={styles.section} key={key}>
            {value.map((entry: Education, i: number) => (
              <EducationCard key={i} info={entry} />
            ))}
          </section>
        </div>
      );
    }

    if ((key === 'experience' || key === 'extracurriculars') && isExperienceArray(value)) {
      return (
        <div key={key} className={styles.sectionWrapper}>
          <h2>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</h2>
          <section className={styles.section} key={key}>
            {value.map((entry: Experience, i: number) => (
              <ExperienceCard key={i} info={entry} />
            ))}
          </section>
        </div>
      );
    }

    if (key === 'skills' && Array.isArray(value)) {
      return (
        <div key={key} className={styles.sectionWrapper}>
          <h2>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</h2>
          <section className={styles.section} key={key}>
            <Link
                    href='/projects'
                    rel='noopener noreferrer'
                    className='text-lg font-bold text-(--blue) hover:underline inline-flex items-center'
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

  const renderedResume = (
    Object.entries(resume as Resume).map(([key, value]) => renderData(key, value))
  );

  return (
    <main className='!max-w-(--breakpoint-lg) !mx-auto !flex !flex-col !items-start !p-4 !gap-4'>
        {renderedResume}
    </main>
  );

}