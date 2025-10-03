'use client';

import React, { createContext, useContext, useRef } from 'react';
import type { Project } from '@/app/types';

type Ctx = { projects: Project[] };
const ProjectsContext = createContext<Ctx | null>(null);

export function ProjectsProvider({
  initialProjects,
  children,
}: {
  initialProjects: Project[];
  children: React.ReactNode;
}) {
  // Keep the array stable for the entire tab/session (no re-fetches, no re-renders).
  const ref = useRef<Project[] | null>(null);
  if (ref.current === null) ref.current = initialProjects;

  return (
    <ProjectsContext.Provider value={{ projects: ref.current }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error('useProjects must be used within <ProjectsProvider>');
  return ctx.projects;
}
