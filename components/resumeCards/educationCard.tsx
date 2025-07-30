'use client';
import React from 'react';
import { Education, Course }from '@/app/types';
import { formatYearMonth } from '@/lib/format';
import Image from 'next/image';
import styles from './resumeCards.module.css';
import { isCourseArray } from '@/lib/util';


export default function EducationCard({ info } : { info : Education}) {

    const [expanded, setExpanded] = React.useState(false);

    function Course({ course }: { course : Course }) {
        const [expanded, setExpanded] = React.useState(false);

        return (
            <li className={styles.course} onClick={() => setExpanded(!expanded)}>
                <div className='flex flex-row justify-between items-center'>
                    <div className='!p-0 !m-0 !w-fit'>
                        <p>{course.title}
                        <span className='!ml-2 !text-sm !text-(--subtle-font-color)'>{course.semester} {course.year}</span>
                        </p>
                    </div>
                    <p className='!text-sm'>{expanded ? '▼' : '►'}</p>
                </div>
                {expanded && <p className='!pl-5 !text-sm'>{course.description}</p>}
            </li>
        );
    }


    return (
        <div className='flex flex-col items-start border-[var(--border-color)] border-b last:border-b-0 gap-y-4'>
            <div className={styles.row}>
                <h3>
                    {info.school}{info.college !== undefined ? `, College of ${info.college}` : null}
                </h3>
                <Image src={info.logo} alt='school logo' width={40} height={40} className='p-0'/>
            </div>
            <div className={styles.row}>
                <p>
                    {info.degree}{info.minor !== undefined ? `, Minor in ${info.minor}` : null}
                </p>
                <p>
                    {formatYearMonth(info.graduation)}
                </p>
            </div>
            {info.coursework === undefined ? (
                null
            ) : (
            <div className='!p-0 !m-0 !mt-4 !items-start '>
                <button
                onClick={() => setExpanded(!expanded)}
                className='!text-xl !border-[3px] border-[var(--border-color)] !py-2 !px-4 !mb-2 !rounded-full !w-fit' 
                >
                    Notable Coursework  <span className='!text-sm !h-full'>{expanded ? '▼' : '►'}</span>
                </button>   
                {expanded && <ul className='!p-0 !m-0 !border border-[var(--border-color)] !rounded !w-full'>
                    {isCourseArray(info.coursework) ? 
                        info.coursework.map((course, index) => (
                            <Course key={index} course={course} />
                        )) : 
                        <p className='!p-2'>No coursework available.</p>
                    }
                </ul> }
            </div>
            )}
        </div>
    );
}