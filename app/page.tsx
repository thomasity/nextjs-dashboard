'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { DownloadResume, EmailMe } from '@/components/buttons/buttons';
import projectsData from '@/app/data/projects.json';
import { Project } from '@/app/types';
import FeaturedProjectLeaf from '@/components/projects/projectLeaf/featuredProjectLeaf';




export default function Page() {
  const { theme, setTheme } = useTheme();
  const [projects, setProjects] = useState<Project[]>(projectsData as Project[]);

  useEffect(() => {
        const newProjects = projects.filter((project) => project.ongoing);
        setProjects(newProjects);
    }, []);

  return (
    <div className="page-wrapper">
        <main id="landing">
            <div className="w-[70%]">
              <p>Hello, my name is <span id="me" className="font-bold">Thomas Callen</span> and I'm a </p>
              <h1 id="title">Software Developer.</h1>
              <div className="lg:w-2/3">
                <p className="!text-sm">I specialize in building high-quality web applications using modern technologies like React, Next.js, and TypeScript. With a strong foundation in computer science and a passion for coding, I create efficient and scalable solutions that meet user needs.</p>
                <br />
                <p className="!text-sm">Feel free to explore my portfolio to see some of the projects I've worked on, and don't hesitate to reach out if you'd like to connect or collaborate!</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <DownloadResume />
              <EmailMe />
            </div>
        </main>
        <section className="w-full h-full grid grid-cols-3 gap-4 p-8 border-y theme-border mb-4">
          <div className="flex flex-col items-center border-r theme-border p-4 text-center space-y-4">
            <img src={theme == 'light' ? "/backend.png" : "/backend-dark.png"} alt="Backend Development" width={64} height={64} className="bg-[#f9fafb] rounded-xl" />
            <div>
              <p className="">Back-end Development</p>
              <p className="text-[var(--inverse-subtle-font-color)] !text-sm">FastAPI / Node.js / Express / Next.js / SQL</p>
            </div>
          </div>
          <div className="flex flex-col items-center border-r theme-border p-4 text-center space-y-4">
            <img src={theme == 'light' ? "/frontend.png" : "/frontend-dark.png"} alt="Frontend Development" width={64} height={64} className="bg-[#f9fafb] rounded-xl" />
            <div>
              <p className="">Front-end Development</p>
              <p className="text-[var(--inverse-subtle-font-color)] !text-sm">React / Next.js / Tailwind CSS / JavaScript</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center space-y-4">
            <img src={theme == 'light' ? "/embedded.png" : "/embedded-dark.png"} alt="Embedded Development" width={64} height={64} className="bg-[#f9fafb] rounded-xl" />
            <div>
              <p className="">Embedded Systems Prototyping</p>
              <p className="text-[var(--inverse-subtle-font-color)] !text-sm">Arduino / Raspberry Pi / C / C++</p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-[1400px] mb-4 p-4">
          <h2 className="mr-auto my-4 !font-bold">Work I'm Working On:</h2>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {projects.length ? (projects.map((p) => (
              <FeaturedProjectLeaf key={p.name} project={p} />
            ))) : <p>No Active Projects</p>}
          </div>
        </section>
    </div>
  );
}
