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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={` ${styles['theme-button']} !left-[1.25rem] !right-auto !bottom-auto`}
      >
        ☰
      </button>

    <h2>
      {pathname === '/' ? 'Home' : pathname.charAt(1).toUpperCase() + pathname.slice(2)}
    </h2>

      <div
        className={clsx(
          'fixed inset-0 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      <section
        className={clsx(
          'fixed top-0 left-0 h-full w-full !p-0 z-1000 transition-transform duration-300 !rounded-none',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`${styles['theme-button']} !top-[1rem] !left-[1.25rem] !right-auto !bottom-auto`}
        >
          ✕
        </button>

        <nav className="!flex !flex-col !items-center !justify-stretch h-full !w-full !rounded-none !border-0 !p-0 !m-0 bg-[var(--background-color)] text-[var(--font-color)]">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={styles['nav-entry']}
            >
              {link}
            </Link>
          ))}
          <div className="!flex !flex-row !items-center !justify-stretch !h-full !w-full !border-b !border-[var(--border-color)] !p-0 !m-0">
            <Link 
                    href='https://github.com/thomasity' 
                    rel='noopener noreferrer'
                    target='_blank'
                    className={`${styles['nav-entry']} !border-0`} 
                >
                    {theme === 'dark' ? (
                        <Image src="/social_icons/github_logo_white.png" alt="Github" height={40} width={40} />
                    ) : (
                        <Image src="/social_icons/github_logo.png" alt="Github" height={40} width={40} />
                    )}
                </Link>
                <Link 
                    href='https://www.linkedin.com/in/thomas-callen-410a11252' 
                    rel='noopener noreferrer'
                    target='_blank'
                    className={`${styles['nav-entry']} !border-0`}
                >
                    {theme === 'dark' ? (
                        <Image src="/social_icons/linkedin_logo_white.png" alt="LinkedIn" height={40} width={40} />
                    ) : (
                        <Image src="/social_icons/linkedin_logo.png" alt="LinkedIn" height={40} width={40} />
                    )}
                </Link>
          </div>
          <Link
            key="Resume-Download"
            href="/resume.pdf"
            download="ThomasCallen_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className={`${styles['nav-entry']} ${styles['download-button']}`}
          >
            <span className="inline-block">Download Resume</span>
            <ArrowDownTrayIcon className='inline-block h-5 w-5'/>
          </Link>
        </nav>
      </section>
    </>
  );
}
