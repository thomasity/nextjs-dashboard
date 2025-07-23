'use client'
import React from 'react';
import styles from './socialMediaWidget.module.css';
import { SocialIcon } from 'react-social-icons';
import { useTheme } from 'next-themes';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';



export default function SocialMediaWidget() {
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = React.useState(false);

    React.useEffect(() => {
          setMounted(true);
        }, []);
      
    if (!mounted) return null;

    return (
        <div className={styles.widgetContainer}>
            <a
                href="/resume.pdf"
                download="ThomasCallen_Resume.pdf"
                className="flex flex-row justify-between items-center px-4 py-2 bg-[var(--blue)] text-white rounded hover:bg-[var(--blue-hover)] active:bg-[var(--blue-active)] active:scale-95 text-sm"
            >
                Download Resume
                <ArrowDownTrayIcon className="h-5 w-5"/>
            </a>
            <nav className={styles.widget}>
                <SocialIcon 
                    url="https://www.linkedin.com/in/thomas-callen-410a11252" 
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.socialIcon} 
                    style={{ height: 32, width: 32 }}
                />
                <SocialIcon 
                    url="https://github.com/thomasity" 
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.socialIcon} 
                    style={{ height: 32, width: 32 }} 
                    bgColor={theme === 'dark' ? '#F9FAFB' : '#1F2937'} 
                    fgColor={theme === 'light' ? '#F9FAFB' : '#1F2937'} 
                />
            </nav>

        </div>
    );
}
