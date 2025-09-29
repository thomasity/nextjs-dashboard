import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import styles from './sideNav.module.css';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const navLinks = ['Home', 'Projects', 'Resume', 'Contact'];

export default function SideNav() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-[1000] md:hidden w-full',
        'bg-[var(--bg-color)] border-t border-[var(--border-color)]'
      )}
    >
      <nav className="flex h-16 w-full items-stretch bg-[var(--background-color)] text-[var(--font-color)] pb-[env(safe-area-inset-bottom)]">
        {/* main links */}
        {navLinks.map((link) => (
          <Link
            key={link}
            href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
            className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:bg-black/5 dark:hover:bg-white/10"
          >
            {link}
          </Link>
        ))}


        {/* <Link
          href="https://github.com/thomasity"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="GitHub"
        >
          {theme === 'dark'
            ? <Image src="/social_icons/github_logo_white.png" alt="GitHub" height={20} width={20} />
            : <Image src="/social_icons/github_logo.png" alt="GitHub" height={20} width={20} />
          }
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/thomas-callen-410a11252"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="LinkedIn"
        >
          {theme === 'dark'
            ? <Image src="/social_icons/linkedin_logo_white.png" alt="LinkedIn" height={20} width={20} />
            : <Image src="/social_icons/linkedin_logo.png" alt="LinkedIn" height={20} width={20} />
          }
          LinkedIn
        </Link>

        <Link
          key="Resume-Download"
          href="/resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:bg-black/5 dark:hover:bg-white/10"
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          Resume
        </Link> */}
      </nav>
    </section>

  );
}
