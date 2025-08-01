import React from 'react';
import { Metadata } from 'next';
import '@/styles/global.css';
import 'katex/dist/katex.min.css';
import { comfortaa } from '@/styles/fonts';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/header/header';
import ThemeToggle from '@/components/themeToggle/themeToggle';

export const metadata: Metadata = {
  title: 'Thomas Callen - Software Developer Portfolio',
  description: 'Welcome to the portfolio of Thomas Callen, showcasing software projects, skills, and experience.',
  keywords: ['Thomas Callen', 'Software Developer', 'Portfolio', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Web Developer'],
  authors: [{ name: 'Thomas Callen', url: 'https://yourwebsite.com' }],
  creator: 'Thomas Callen',
  publisher: 'Thomas Callen',
  metadataBase: new URL('https://yourwebsite.com'),
  openGraph: {
    title: 'Thomas Callen Portfolio',
    description: 'Explore projects, skills, and experience of software developer Thomas Callen.',
    url: 'https://yourwebsite.com',
    siteName: 'Thomas Callen Portfolio',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Callen Portfolio',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Callen Portfolio',
    description: 'Explore projects, skills, and experience of software developer Thomas Callen.',
    images: ['https://yourwebsite.com/twitter-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = 'width=device-width, initial-scale=1';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${comfortaa.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
            {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
