'use client';
import React from 'react';
import { Experience }from '@/app/types';
import { formatYearMonth } from '@/lib/format';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import styles from './resumeCards.module.css';
import useIsMobile from '@/lib/hooks/useIsMobile';
import Logo from '../logo';

export default function ExperienceCard({ info } : { info : Experience}) {
    const isMobile = useIsMobile();

    function ExternalLink({ info } : { info : Experience}) {
        if (!info.link) return null;
        return (
            <Link
                    href={info.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='!text-sm !font-bold !text-[var(--blue)] hover:underline !flex !inline-flex !items-center !gap-1'
                    >
                    website
                    <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </Link>
        );
    }


    return (
        <div className='!p-8 border-[var(--border-color)] border-b last:border-b-0'>
            <div className={styles.row}>
                <div className='!p-0 !m-0'>
                    <h3 className='!m-0 !p-0'>{info.company}</h3>
                    <ExternalLink info={info} />
                </div>
                <Logo info={info} isMobile={isMobile} />
            </div>
            <div className={styles.row}>
                <p>
                    {info.title}
                </p>
                <p>
                    {formatYearMonth(info.start)}-{formatYearMonth(info.end, info.still_working)}
                </p>
            </div>
            {info.details === null ? (
                null
            ) : (
            <div className='!p-0 !m-0 !mt-4 !items-start'>
                <ul className='p-0 m-0 list-disc pl-5 gap-5'>
                    {(info.details).map((detail, index) => (
                        <li key={`${info.company}-${index}`}>
                            <p>{detail}</p>
                        </li>
                    ))}
                </ul>
            </div>

            )}
        </div>
    );
}