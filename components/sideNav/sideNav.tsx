import Link from 'next/link';
import clsx from 'clsx';


const navLinks = ['Home', 'Projects', 'Resume', 'Contact'];

export default function SideNav() {

  return (
    <section
      className={clsx(
        'fixed top-0 left-0 right-0 z-[1000] w-full',
        'bg-[var(--bg-color)] border-b border-[var(--border-color)]'
      )}
    >
      <nav className="flex h-16 w-full items-stretch bg-[var(--bg-color)] text-[var(--font-color)] pb-[env(safe-area-inset-bottom)]">
        {navLinks.map((link) => (
          <Link
            key={link}
            href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
            className="flex flex-1 flex-col items-center justify-center gap-1 text-xs hover:bg-[var(--bg-hover)] active:bg-[var(--bg-active)]"
          >
            {link}
          </Link>
        ))}
      </nav>
    </section>

  );
}
