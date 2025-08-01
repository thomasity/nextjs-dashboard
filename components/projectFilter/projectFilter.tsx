'use client';

import React, { useState, useEffect } from 'react';
// import { frameworkTree, languageTree, fieldTree } from '@/app/data/frameworkTree';
import { getFilters } from '@/app/data/frameworkTree';
import { Project } from '@/app/types';
import projectsData from '@/app/data/projects.json';
import FilterTab from '../filterTab';

const projects: Project[] = projectsData;
const filters = getFilters({ projects });
const yearTree = filters[0];
const fieldTree = filters[1];
const frameworkTree = filters[2];
const libraryTree = filters[3];
const languageTree = filters[4];
const difficultyTree = filters[5];


export default function ProjectFilter({ setProjects, projects, setFilter } 
  : 
  { setProjects: React.Dispatch<React.SetStateAction<Project[]>>, 
    projects: Project[],
    setFilter: React.Dispatch<React.SetStateAction<string>>}) 
{
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

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
    <aside className='!h-full !w-full !mb-auto !flex !flex-col !justify-start !items-center !overflow-hidden !p-0'>
      <div className='!w-full !flex !flex-row !justify-between !items-center !border-[var(--border-color)] !border-b-[3px] !pb-0'>
        <p>Filters</p>
        <button
          onClick={resetFilters}
          className='!mb-1 !px-4 !py-2 !text-xs'
        >
          Clear
        </button>
      </div>
      <div className='!h-auto !p-0 !m-0 !overflow-auto'>
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
