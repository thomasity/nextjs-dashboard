'use client';
import Image from 'next/image';
import React from 'react';
import useIsMobile from '@/lib/hooks/useIsMobile';
import { useTheme } from 'next-themes';
import { DownloadResume, EmailMe } from '@/components/socialMediaWidget/socialMediaWidget';


export default function Page() {
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  return (
    <div className="page-wrapper">
        <main id="landing">
            <div className="w-[70%]">
              <p>Hello, my name is <span id="me" className="font-bold">Thomas Callen</span> and I'm a </p>
              <h1 id="title">Software Developer.</h1>
              <p className="!text-sm">I specialize in building high-quality web applications using modern technologies like React, Next.js, and TypeScript. With a strong foundation in computer science and a passion for coding, I create efficient and scalable solutions that meet user needs.</p>
              <br />
              <p className="!text-sm">Feel free to explore my portfolio to see some of the projects I've worked on, and don't hesitate to reach out if you'd like to connect or collaborate!</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <DownloadResume />
              <EmailMe />
            </div>
        </main>
        <section className="w-full h-full grid grid-cols-3 gap-4 p-8">
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
        {/* <section className="w-[70%] py-[4rem]">
          <h2>About Me</h2>
          <div className="grid grid-cols-4 gap-4 p-8">
            <img src="/handsome_fella.jpg" alt="Thomas Callen" width={200} height={200} className="rounded-xl col-span-1"/>
            <div className="col-span-3 flex flex-col justify-center items-center text-left border theme-border p-4 rounded">
              <p className="!text-sm mb-2">I'm Thomas Callen, a dedicated software developer with a passion for creating efficient and scalable web applications. With a strong foundation in computer science and hands-on experience in both front-end and back-end development, I thrive on solving complex problems and delivering high-quality solutions.</p>
              <p className="!text-sm mb-2">My expertise includes working with modern technologies such as React, Next.js, TypeScript, and Python. I enjoy collaborating with cross-functional teams to bring innovative ideas to life and continuously improve my skills through learning and experimentation.</p>
              <p className="!text-sm">When I'm not coding, I love exploring new tech trends, contributing to open-source projects, and engaging with the developer community. I'm always eager to connect with like-minded professionals and explore new opportunities in the tech world.</p>
            </div>
          </div>
        </section> */}
    </div>
  );
}
