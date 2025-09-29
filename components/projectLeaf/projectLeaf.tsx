import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import styles from './projectLeaf.module.css';
import DifficultyHighlighter from '../difficultyHighlighter/difficultyHighlighter';
import { Project } from '@/app/types';

export default function ProjectLeaf({ project }: { project: Project }) {

    return (
        <Link href={`/projects/${project.name}`} className='!w-full !h-64 !p-0 !m-0'>
            <div className={clsx(styles.card, styles[project.difficulty.toLowerCase()])}>
                <p className={styles.year}>{project.year}</p>
                <DifficultyHighlighter difficulty={project.difficulty}>
                    <div className='!flex !flex-col-reverse !items-start !m-0 !p-0 !h-[19%]'>
                        <h3 className={styles.name}>{project.name}</h3>
                    </div>
                    <div className='!flex !flex-col !items-start !m-0 !mb-1 !p-0 !h-[6%]'>
                        <p className={styles.field}>{project.fields.join(', ')}</p>
                    </div>
                    <div className='!flex !flex-col !justify-center !m-0 !p-0 !h-[38%]'>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                    <div className='!flex !flex-col !items-start !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.frameworks.length != 0 ? (
                            <p className={styles.frameworks}>
                                Framework{project.frameworks.length > 1 ? 's' : null }: {project.frameworks.join(', ')}
                            </p>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className='!flex !flex-col !items-start !w-full !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.languages.length != 0 ? (
                            <p className={styles.languages}>
                                Language{project.languages.length > 1 ? 's' : null }: {project.languages.join(', ')}
                            </p>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className='!flex !flex-col !items-start !w-full !m-0 !mb-1 !p-0 !h-[6%]'>
                        {project.libraries.length != 0 ? (
                            <p className={styles.languages}>
                                {project.libraries.length > 1 ? 'Libraries' : 'Library'}: {project.libraries.join(', ')}
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