import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const navLinks = ['Home', 'Projects', 'Resume', 'Contact'];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2"
      >
        <h3>☰</h3>
      </button>

      <div
        className={clsx(
          'fixed inset-0 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      <section
        className={clsx(
          'fixed top-0 left-0 h-full w-full z-50 transition-transform duration-300 !rounded-none',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
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
