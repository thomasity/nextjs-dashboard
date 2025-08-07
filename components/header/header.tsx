'use client';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import SocialMediaWidget from '../socialMediaWidget/socialMediaWidget';
import styles from './header.module.css';
import SideNav from '../sideNav/sideNav';
import useIsMobile from '@/lib/hooks/useIsMobile';

const links = [
    'Home',
    'Projects',
    'Resume',
    'Contact'
];

export default function Header() {
    const pathname = usePathname();
    const decodedPathname = decodeURIComponent(pathname);
    const isMobile = useIsMobile();

    return (
        <header className={styles.header}>
            {isMobile ? (
                <SideNav path={'/' + decodedPathname.split('/')[1]} />
            ) : (
                <>
                <nav className={styles['nav-bar']}>
                    {links.map((link) => {
                        const path = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                        const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
                        return (
                            <Link
                            key={link}
                            href={path}
                            className={clsx(styles['nav-button'],
                                isActive ? styles.active : null)}
                            >
                                {link}
                            </Link>
                        );
                    })}
                </nav>
                <SocialMediaWidget />
                </>
            )}

        </header>
    );
}
