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
            className="text-center"
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



export default function SocialMediaWidget() {
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = React.useState(false);

    React.useEffect(() => {
          setMounted(true);
        }, []);
      
    if (!mounted) return null;

    return (
        <div className={styles['widget-container']}>
            <nav className={styles.widget}>
                <Link 
                    href='https://github.com/thomasity' 
                    rel='noopener noreferrer'
                    target='_blank'
                    className={styles['social-icon']} 
                >
                    {theme === 'dark' ? (
                        <Image src="/social_icons/github_logo_white.png" alt="Github" height={32} width={32} />
                    ) : (
                        <Image src="/social_icons/github_logo.png" alt="Github" height={32} width={32} />
                    )}
                </Link>
                <Link 
                    href='https://www.linkedin.com/in/thomas-callen-410a11252' 
                    rel='noopener noreferrer'
                    target='_blank'
                    className={styles['social-icon']} 
                >
                    {theme === 'dark' ? (
                        <Image src="/social_icons/linkedin_logo_white.png" alt="LinkedIn" height={32} width={32} />
                    ) : (
                        <Image src="/social_icons/linkedin_logo.png" alt="LinkedIn" height={32} width={32} />
                    )}
                </Link>
            </nav>

        </div>
    );
}
