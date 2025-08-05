import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './themeToggle/themeToggle.module.css';
import { usePathname } from 'next/navigation';

const navLinks = ['Home', 'Projects', 'Resume', 'Contact'];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
          'fixed top-0 left-0 h-full w-full z-1000 transition-transform duration-300 !rounded-none',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`${styles['theme-button']} !top-[1rem] !left-[1.25rem] !right-auto !bottom-auto`}
        >
          ✕
        </button>

        <nav className="!flex !flex-col !items-center !justify-stretch h-full w-full text-2xl !rounded-none !border-0 !p-0 !m-0 bg-[var(--background-color)] text-[var(--font-color)]">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="w-full h-full hover:underline border-b text-center last:border-b-0 border-[var(--border-color)]"
            >
              {link}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
