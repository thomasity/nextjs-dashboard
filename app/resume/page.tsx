import React from 'react';
import resumeData from '@/app/data/resume.json';
import EducationCard from '@/components/resumeCards/educationCard';
import ExperienceCard from '@/components/resumeCards/experienceCard';
import SkillCard from '@/components/resumeCards/skillCard';
import { Phone, MapPin, Mail, GraduationCap, School } from 'lucide-react';

const resume = resumeData;


export default function Page() {

  return (
    <main className="page-wrapper mt-8">
      <div className="w-full max-w-[80%] grid xl:grid-cols-4 grid-cols-1 gap-4">
        <div className="col-span-1 h-fit p-4">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex flex-col items-center justify-center my-8">
              <img src="/handsome_fella.jpg" alt="Thomas Callen" width={200} height={200} className="shadow-xl"/>
              <div className="w-[300px] h-[225px] -rotate-10 trapezoid absolute bg-[var(--bg-active)] -z-10" />
              <div className="w-[300px] h-[175px] -rotate-5 trapezoid absolute bg-[var(--bg-hover)] -z-10" />
            </div>
            <div className="bg-[var(--bg-color)] border-t theme-border w-full">
              <h1 className="text-center mt-2">Thomas Callen</h1>
              <p className="text-center text-(--subtle-font-color) !text-sm mb-2">Software Developer</p>
            </div>
            <div className="mb-4 pb-4 px-8 mr-auto text-[var(--font-color)]"> 
              <div className="grid grid-cols-4 gap-2 ">
                <MapPin />
                <p className="col-span-3">Spring Lake, MI</p>
              </div>
              <div className="grid grid-cols-4 gap-2 ">
                <Phone />
                <p className="col-span-3">+1 (616) 558-8366</p>
              </div>
              <div className="grid grid-cols-4 gap-2 ">
                <School />
                <p className="col-span-3">University of Michigan</p>
              </div>
              <div className="grid grid-cols-4 gap-2 ">
                <GraduationCap />
                <p className="col-span-3">B.S.E Computer Science (May 2025)</p>
              </div>
            </div>
          </div>
          {/* <div className="border-b mb-4 pb-4">
            <h2>Education</h2>
            {resume['education'].map((edu, i) => (
              <EducationCard key={i} info={edu} />
            ))}
          </div> */}
          <div className="mb-4 pb-4">
            <h2 className="!font-semibold">Skills</h2>
            {resume['skills'].map((skill, i) => (
              <SkillCard key={i} info={skill} />
            ))}
          </div>
        </div>
        <div className="col-span-3 p-2">
          <div className="border-b theme-border mb-4 pb-4">
            <h2 className="!font-semibold">Summary</h2>
            <div className="p-8">
              <p>{resume['summary']}</p>
            </div>
          </div>
          <div className="border-b theme-border mb-4 pb-4">
            <h2 className="!font-semibold">Work Experience</h2>
            {resume['experience'].map((exp, i) => (
              <ExperienceCard key={i} info={exp} />
            ))}
          </div>
          <div className="mb-4 pb-4">
            <h2 className="!font-semibold">Extracurriculars</h2>
            {resume['extracurriculars'].map((exp, i) => (
              <ExperienceCard key={i} info={exp} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );

}