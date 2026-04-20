'use client';
import Link from 'next/link';
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
        <header className="sticky top-0 z-50 bg-(--bg-color) border-b border-(--border-color)">
            {isMobile ? (
                <MobileHeader />
            ) : (
            <nav className="w-full h-14 grid grid-cols-3 items-center">
                <div className="flex items-center justify-start">
                    <Link key={"root"} href="/"><ThemedImage lightSrc='/logo.png' darkSrc='/logo_dark.png' defaultSrc='/logo.png' alt='Logo' height={56} width={120} /></Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="trapezoid-nav">
                        {links.map((link) => {
                            const path = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                            const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
                            return (
                                <Link
                                    key={link}
                                    href={path}
                                    className={clsx("trapezoid", isActive ? "text-(--font-inverse) bg-(--dot-color)" : "cursor-pointer hover:underline")}
                                >
                                    {link}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-end">
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
