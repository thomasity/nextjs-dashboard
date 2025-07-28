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
                        className={clsx('w-1/5 items-center justify-center h-full p-3 text-xs text-center cursor-pointer border-0 active:scale-95 \
                            rounded-full',
                            isActive ? 'bg-[#0d1117] text-[#f0f6fc] dark:bg-[#f9fafb] dark:text-[#1f2328]' : 'hover:bg-[#ececec] active:bg-[#e0e0e0] dark:hover:bg-[#181b20] dark:active:bg-[#23272e]')}
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
