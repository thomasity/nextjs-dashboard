'use client'
import Link from "next/link";
import React from 'react';
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    "Home",
    "About",
    "Projects",
    "Resume",
    "Contact"
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed flex justify-center items-center w-full h-16 z-50">
            <nav className="flex flex-row justify-around items-center mx-2 bg-gray-50 border-2 border-gray-200 dark:border-gray-700 rounded-full dark:bg-gray-800 shadow-lg">
                {links.map((link) => {
                    const path = link === "Home" ? '/' : `/${link.toLowerCase()}`;
                    const isActive = path === pathname;
                    return (
                        <Link
                        key={link}
                        href={path}
                        className={clsx('w-1/5 items-center justify-center h-full p-3 font-comfortaa text-xs text-center cursor-pointer border-0 \
                            rounded-full',
                            isActive ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700')}
                        >
                            {link}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
