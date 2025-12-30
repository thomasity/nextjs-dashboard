'use client';
import React from 'react';
import styles from './socialMediaWidget.module.css';
import { useTheme } from 'next-themes';
import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export function DownloadResume({className}: {className?: string}) {
    return (
        <Link
            href='/resume.pdf'
            // download='ThomasCallen_Resume.pdf'
            className={"text-center " + (className ? className : "")}
            rel='noopener noreferrer'
            target='_blank'
            id="download-resume"
        >
            <span className="inline-block">View Resume</span>
            <ArrowDownTrayIcon className='inline-block h-5 w-5 ml-2'/>
        </Link>

    )
}

export function EmailMe({className}: {className?: string}) {
    return (
        <Link
            href='/contact'
            className="text-center"
            id="email-me"
        >
            <EnvelopeIcon className='inline-block h-5 w-5 mr-2'/>
            <span className="inline-block">Email Me</span>
        </Link>
    )
}
