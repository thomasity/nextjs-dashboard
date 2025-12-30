import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import styles from './projectLeaf.module.css';
import { Project } from '@/app/types';
import { slugify } from '@/lib/format';

interface DifficultyHighlighterProps {
    difficulty: string;
    children: React.ReactNode;
}


function DifficultyHighlighter({ difficulty, children }: DifficultyHighlighterProps) {

    return (
        <div className={clsx(
        '!w-full !h-full !p-4 !text-left',
        difficulty.toLowerCase() === 'beginner' ? styles.beginner :
        difficulty.toLowerCase() === 'intermediate' ? styles.intermediate :
        difficulty.toLowerCase() === 'advanced' ? styles.advanced :
        'border-l-4 border-gray-500'
      )}>
            {children}
        </div>
    );
}

export default function ProjectLeaf({ project }: { project: Project }) {

    return (
        <Link href={`/projects/${project.id}`} className='!w-full !h-64 !p-0 !m-0'>
            <div className={clsx(styles.card, styles[`${project.difficulty.toLowerCase()}-glow`])}>
                <DifficultyHighlighter difficulty={project.difficulty}>
                    <div className='!flex !flex-col-reverse !items-start !m-0 !p-0 !h-[19%]'>
                        <h3 className={styles.name}>{project.name}</h3>
                        <p className={styles.year}>{project.year}</p>
                    </div>
                    {project.fields && project.fields.length != 0 ? (
                    <div className='!flex !flex-col !items-start !m-0 !mb-1 !p-0 !h-[6%]'>
                        <p className={styles.field}>{project.fields.join(', ')}</p>
                    </div>
                    ) : (
                        null
                    )}
                    <div className='!flex !flex-col !justify-center !m-0 !p-0 !h-[38%]'>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                    <div className='!flex !flex-col !items-start !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.frameworks && project.frameworks.length != 0 ? (
                            <p className={styles.frameworks}>
                                Framework{project.frameworks.length > 1 ? 's' : null }: {project.frameworks.join(', ')}
                            </p>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className='!flex !flex-col !items-start !w-full !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.languages && project.languages.length != 0 ? (
                            <p className={styles.languages}>
                                Language{project.languages.length > 1 ? 's' : null }: {project.languages.join(', ')}
                            </p>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className='!flex !flex-col !items-start !w-full !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.libraries && project.libraries.length != 0 ? (
                            <p className={styles.languages}>
                                {project.libraries.length > 1 ? 'Libraries' : 'Library'}: {project.libraries.join(', ')}
                            </p>
                            ) : (
                                null
                            )
                        }
                    </div>

                    <div className='!flex !flex-col !items-start !w-full !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.platforms && project.platforms.length != 0 ? (
                            <p className={styles.languages}>
                                {project.platforms.length > 1 ? 'Platforms' : 'Platform'}: {project.platforms.join(', ')}
                            </p>
                            ) : (
                                null
                            )
                        }
                    </div>

                </DifficultyHighlighter>
            </div>
        </Link>
    );
}