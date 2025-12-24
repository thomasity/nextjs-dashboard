'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';
import { usePathname } from 'next/navigation';
import MobileHeader from './mobileHeader/mobileHeader';
import useIsMobile from '@/lib/hooks/useIsMobile';
import clsx from 'clsx';
import ThemeToggle from '../theme/themeToggle';
import ThemedImage from '../ThemedImage';

const links = [
    'Home',
    'Projects',
    'Resume',
    'Contact'
];

export default function Header() {
    const pathname = usePathname();
    const isMobile = useIsMobile();

    return (
        <header>
            {isMobile ? (
                <MobileHeader />
            ) : (
            <nav className="w-full flex flex-row justify-between items-center">
                <Link key={"root"} href="/"><ThemedImage lightSrc='/logo.png' darkSrc='/logo_dark.png' defaultSrc='/logo.png' alt='Logo' height={128} width={128} /></Link>
                <div className="trapezoid-nav">
                    {links.map((link) => {
                        const path = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                        const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
                        return (
                            <Link
                            key={link}
                            href={path}
                            className={clsx("trapezoid", isActive ? "text-[var(--font-inverse)] bg-[var(--dot-color)]" : "cursor-pointer hover:underline")}
                            >
                                {link}
                            </Link>
                        );
                    })}
                </div>
                <div>
                    <Link 
                        href='https://github.com/thomasity' 
                        rel='noopener noreferrer'
                        target='_blank'
                        className="hover:underline nav-link"
                    >
                        github
                    </Link>
                    /
                    <Link 
                        href='https://www.linkedin.com/in/thomas-callen-410a11252' 
                        rel='noopener noreferrer'
                        target='_blank'
                        className="hover:underline nav-link mr-2"
                        >
                        linkedin
                    </Link>
                    <ThemeToggle />
                </div>
            </nav>
            )}

        </header>
    );
}
