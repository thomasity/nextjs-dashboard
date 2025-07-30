'use client';
import { useEffect, useState } from 'react';
import { Project } from '@/app/types';
import styles from '@/components/projectCrossBar/projectCrossBar.module.css';

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
  filter: string
}) {
    const [open, setOpen] = useState<boolean>(false);
    const [sortState, setSortState] = useState<string>('Year: New to Old');
    type ProjectKey = keyof Project;

    useEffect(() => {
        sortProjects('year');
    }, []);

    const sortProjects = (key: ProjectKey, reversed?: boolean) => {
        const sortedProjects =  [...projects].sort((a:Project, b:Project) => {
            const aVal = (key === 'year') ? a[key] : DifficultyLevel[a[key] as keyof typeof DifficultyLevel];
            const bVal = (key === 'year') ? b[key] : DifficultyLevel[b[key] as keyof typeof DifficultyLevel];

            if (typeof aVal === 'number' && typeof bVal === 'number') {
            if (reversed) {
                return aVal - bVal;
            }
            return bVal - aVal;
            }

            return 0;
        });
        console.log(sortedProjects);

        setProjects(sortedProjects);

    };

  return (
    <div className={styles.crossBarContainer}>
        <div className='!relative !inline-block !w-auto !text-left !m-0 !p-0'>
            <button
                onClick={() => setOpen(!open)}
                className='w-52'
            >
                <span>{sortState}</span> <span>{open ? '▼' : '►'}</span>
            </button>

            {open && (
                <section className={styles.sortButtonContainer}>
                    <button
                        onClick={() => {
                            sortProjects('year');
                            setSortState('Year: New to Old');
                            setOpen(false);
                        }}
                        className={styles.sortButton}
                    >
                        Year: New to Old
                    </button>
                    <button
                        onClick={() => {
                            sortProjects('year', true);
                            setSortState('Year: Old to New');
                            setOpen(false);
                        }}
                        className={styles.sortButton}
                    >
                        Year: Old to New
                    </button>
                    <button
                        onClick={() => {
                            sortProjects('difficulty');
                            setSortState('Complexity: High to Low');
                            setOpen(false);
                        }}
                        className={styles.sortButton}
                    >
                        Complexity: High to Low
                    </button>
                    <button
                        onClick={() => {
                            sortProjects('difficulty', true);
                            setSortState('Complexity: Low to High');
                            setOpen(false);
                        }}
                        className={styles.sortButton}
                    >
                        Complexity: Low to High
                    </button>
                </section>
            )}
        </div>
        <p className='!text-xs'>{filter !== '' ? `Showing: ${filter}` : 'No filter(s) selected'}</p>
        <div className={`${styles.difficultyContainer} !flex-row !justify-end !w-auto gap-2 !p-0 !m-0`}>
            <div className={styles.difficultyContainer}>
                <div className={`${styles.difficultyColor} bg-[#4caf50]`} />
                <p className={styles.difficultyLabel}>Beginner</p>
            </div>
            <div className={styles.difficultyContainer}>
                <div className={`${styles.difficultyColor} bg-[#ff9800]`} />
                <p className={styles.difficultyLabel}>Intermediate</p>
            </div>
            <div className={styles.difficultyContainer}>
                <div className={`${styles.difficultyColor} bg-[#f44336]`} />
                <p className={styles.difficultyLabel}>Advanced</p>
            </div>
        </div>

    </div>

  );
}
