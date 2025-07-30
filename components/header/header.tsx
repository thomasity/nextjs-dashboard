'use client';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import SocialMediaWidget from '../socialMediaWidget/socialMediaWidget';
import styles from './header.module.css';

const links = [
    'Home',
    'About',
    'Projects',
    'Resume',
    'Contact'
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header>
            <div></div>
            <nav className={styles.navBar}>
                {links.map((link) => {
                    const path = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                    const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
                    return (
                        <Link
                        key={link}
                        href={path}
                        className={clsx(styles.navButton,
                            isActive ? styles.active : null)}
                        >
                            {link}
                        </Link>
                    );
                })}
            </nav>
            <SocialMediaWidget />
        </header>
    );
}
