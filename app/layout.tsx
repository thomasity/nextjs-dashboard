import '@/styles/global.css';
import { comfortaa } from '@/styles/fonts';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/header';
import ThemeToggle from '@/components/themeToggle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${comfortaa.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
            {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
