"use client";
import { useEffect, useState } from "react";
import { Project } from "@/app/types";

enum DifficultyLevel {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3
}

export default function ProjectCrossBar({
  projects,
  setProjects,
  filter
}: {
  projects: Project[],
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>,
  filter: String
}) {
    const [open, setOpen] = useState<boolean>(false);
    const [sortState, setSortState] = useState<String>("Year: New to Old")
    type ProjectKey = keyof Project;

    useEffect(() => {
        sortProjects("year");
    }, [])

    const sortProjects = (key: ProjectKey, reversed?: boolean) => {
        const sortedProjects =  [...projects].sort((a:Project, b:Project) => {
            const aVal = (key === "year") ? a[key] : DifficultyLevel[a[key] as keyof typeof DifficultyLevel];
            const bVal = (key === "year") ? b[key] : DifficultyLevel[b[key] as keyof typeof DifficultyLevel];

            if (typeof aVal === "number" && typeof bVal === "number") {
            if (reversed) {
                return aVal - bVal;
            }
            return bVal - aVal;
            }

            return 0;
        });
        console.log(sortedProjects);

        setProjects(sortedProjects);

    }

  return (
    <div className="m-0 p-0 flex flex-row items-center justify-between w-full">
        <div className="relative inline-block w-auto text-left m-0 p-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-[13rem]"
            >
                <span>{sortState}</span> <span>{open ? '▼' : '►'}</span>
            </button>

            {open && (
                <section className="absolute z-10 mt-2 w-[12rem] p-0 overflow-hidden">
                    <button
                        onClick={() => {
                            sortProjects("year")
                            setSortState("Year: New to Old");
                            setOpen(false)
                        }}
                        className="px-4 py-2 w-full text-left border-0 border-b rounded-none"
                    >
                        Year: New to Old
                    </button>
                    <button
                        onClick={() => {
                            sortProjects("year", true);
                            setSortState("Year: Old to New");
                            setOpen(false);
                        }}
                        className="px-4 py-2 w-full text-left border-0 border-b rounded-none"
                    >
                        Year: Old to New
                    </button>
                    <button
                        onClick={() => {
                            sortProjects("difficulty")
                            setSortState("Complexity: High to Low");
                            setOpen(false)
                        }}
                        className="px-4 py-2 w-full text-left border-0 border-b rounded-none"
                    >
                        Complexity: High to Low
                    </button>
                    <button
                        onClick={() => {
                            sortProjects("difficulty", true)
                            setSortState("Complexity: Low to High");
                            setOpen(false)
                        }}
                        className="px-4 py-2 w-full text-left border-0 rounded-none"
                    >
                        Complexity: Low to High
                    </button>
                </section>
            )}
            </div>
            <p className="text-xs overflow-y-auto">{filter !== "" ? `Showing: ${filter}` : "No filter(s) selected"}</p>
            <div className="flex flex-row justify-end items-center w-auto h-auto p-0 m-0">
                <div className="flex flex-col items-center justify-center h-auto w-1/3 py-2">
                    <div className="rounded-full bg-[#4caf50] h-[1rem] w-[1rem] m-0 p-0" />
                    <p className="text-xs text-[var(--subtle-font-color)]">Beginner</p>
                </div>
                <div className="flex flex-col items-center justify-center h-auto w-1/3 py-2">
                    <div className="rounded-full bg-[#ff9800] h-[1rem] w-[1rem] m-0 p-0" />
                    <p className="text-xs text-[var(--subtle-font-color)]">Intermediate</p>
                </div>
                <div className="flex flex-col items-center justify-center h-auto w-1/3 py-2">
                    <div className="rounded-full bg-[#f44336] h-[1rem] w-[1rem] m-0 p-0" />
                    <p className="text-xs text-[var(--subtle-font-color)]">Advanced</p>
                </div>
            </div>

    </div>

  );
}
