import Image from 'next/image';
import React from 'react';


export default function Page() {

  return (
    <main className="flex flex-col items-center w-screen min-h-screen flex-col p-6">
        <section className="flex flex-col w-full items-center justify-center mt-20 bg-transparent border-0 mx-4">
            <div className='flex flex-row w-full items-center justify-center p-5 rounded-lg'>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Image
                  src="/handsome_fella.jpg"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
                <h1>Thomas Callen</h1>
                <p className="text-lg text-gray-600">Software Engineer</p>
              </div>
              <div className="mt-6 text-center">
                <h1 className="uppercase tracking-wider drop-shadow-lg text-center">
                  Welcome to My Personal Website
                </h1>
                <p className="text-gray-700">
                  Welcome to my personal website! Here you can find information about my projects, skills, and experience.
                </p>
              </div>
            </div>
        </section>
    </main>
  );
}
