import { Project } from "@/app/types";
import FeaturedProjectLeaf from "./projectLeaf/featuredProjectLeaf";
import { useState } from "react";


export default function ProjectsCarrousel({ projects, className }: { projects: Project[], className?: string }) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex : number) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex : number) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <div className={`relative ${className} `}>
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((project, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
                            <FeaturedProjectLeaf project={project} className="w-[75%] grid-cols-2" />
                        </div>
                    ))}
                </div>
                <div className="mx-auto mt-4 flex justify-center">
                    {[...Array(projects.length)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`!w-3 !h-3 !p-0 rounded-full mx-1 !theme-border ${index === currentIndex ? '!bg-[var(--subtle-font-color)]' : '!bg-[var(--bg-active)]'}`}
                        />
                    ))}
                </div>
            </div>
            {currentIndex > 0 &&
                <button onClick={prevSlide} className="!text-[3rem] leading-none !theme-border absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                    &lt;
                </button>
            }
            {currentIndex + 1 < projects.length &&
                <button onClick={nextSlide} className="!text-[3rem] leading-none !theme-border absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                    &gt;
                </button>
            }
        </div>
    );
}