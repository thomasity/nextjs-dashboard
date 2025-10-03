'use client';

import React, { useState, useEffect } from 'react';
// import { frameworkTree, languageTree, fieldTree } from '@/app/data/frameworkTree';
import { getFilters } from '@/app/data/frameworkTree';
import { Project } from '@/app/types';
import FilterTab from './filterTab';



export default function ProjectFilter({ setProjects, projects, setFilter, className } 
  : 
  { setProjects: React.Dispatch<React.SetStateAction<Project[]>>, 
    projects: Project[],
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    className?: string}) 
{
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [yearTree, setYearTree] = useState<number[] | string[]>([]);
  const [fieldTree, setFieldTree] = useState<number[] | string[]>([]);
  const [frameworkTree, setFrameworkTree] = useState<number[] | string[]>([]);
  const [libraryTree, setLibraryTree] = useState<number[] | string[]>([]);
  const [languageTree, setLanguageTree] = useState<number[] | string[]>([]);
  const [difficultyTree, setDifficultyTree] = useState<number[] | string[]>([]);

  function generateLogicExpression(groups: Array<string[] | number[]>) {
    if (!Array.isArray(groups)) return '';

    const orGroups = groups
      .filter(group => Array.isArray(group) && group.length > 0)
      .map(group => {
        if (group.length === 1) return group[0];
        return `(${group.join(' OR ')})`;
      });

    return (orGroups.join(' AND '));
  }

  useEffect(() => {
    console.log("PROJECTS ", projects);
    const filters = getFilters({ projects });
    setYearTree(filters[0]);
    setFieldTree(filters[1]);
    setFrameworkTree(filters[2]);
    setLibraryTree(filters[3]);
    setLanguageTree(filters[4]);
    setDifficultyTree(filters[5]);

  }, [projects])

  useEffect(() => {

    const filteredProjects = projects.filter(project =>
      (selectedFrameworks.length === 0 || project.frameworks.some((fw: string) => selectedFrameworks.includes(fw))) &&
      (selectedLanguages.length === 0 || project.languages.some((lang: string) => selectedLanguages.includes(lang))) &&
      (selectedFields.length === 0 || project.fields.some((lang: string) => selectedFields.includes(lang))) &&
      (selectedYears.length === 0 || selectedYears.includes(project.year)) &&
      (selectedLibraries.length === 0 || project.libraries.some((lib: string) => selectedLibraries.includes(lib))) &&
      (selectedDifficulties.length === 0 || selectedDifficulties.includes(project.difficulty))
    );
    setProjects(filteredProjects);
    setFilter(generateLogicExpression([selectedFrameworks, selectedLanguages, selectedFields, selectedLibraries, selectedYears, selectedDifficulties]));

  }, [selectedFrameworks, selectedLanguages, selectedFields, selectedLibraries, selectedYears, selectedDifficulties]);

  const resetFilters = ():void => {
    setSelectedFrameworks([]);
    setSelectedLanguages([]);
    setSelectedFields([]);
    setSelectedLibraries([]);
    setSelectedYears([]);
    setSelectedDifficulties([]);
    setFilter('');
  };

  return (
    <aside className={className}>
      <div className='!w-full !flex !flex-row !justify-between !items-center !border-[var(--border-color)] !border-b-2 !pb-0'>
        <p className="!text-2xl">Filters</p>
        <button
          onClick={resetFilters}
          className='!mb-1 !px-6 !text-sm'
        >
          Clear
        </button>
      </div>
      <div className='h-full w-full !p-0 !m-0 !overflow-auto'>
        <FilterTab
          label='Frameworks'
          items={frameworkTree}
          selected={selectedFrameworks}
          onChange={(val) => setSelectedFrameworks(val.map(String))}
        />
        <FilterTab
          label='Languages'
          items={languageTree}
          selected={selectedLanguages}
          onChange={(val) => setSelectedLanguages(val.map(String))}
        />
        <FilterTab
          label='Fields'
          items={fieldTree}
          selected={selectedFields}
          onChange={(val) => setSelectedFields(val.map(String))}
        />
        <FilterTab
          label='Years'
          items={yearTree}
          selected={selectedYears}
          onChange={(val) => setSelectedYears(val.map(Number))}
        />
        <FilterTab
          label='Libraries'
          items={libraryTree}
          selected={selectedLibraries}
          onChange={(val) => setSelectedLibraries(val.map(String))}
        />
        <FilterTab
          label='Project Complexity'
          items={difficultyTree}
          selected={selectedDifficulties}
          onChange={(val) => setSelectedDifficulties(val.map(String))}
        />

      </div>
    </aside>
  );
}
