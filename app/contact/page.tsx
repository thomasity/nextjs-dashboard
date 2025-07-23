'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import ContactForm from '@/components/contactForm';
import SocialMediaWidget from '@/components/socialMediaWidget/socialMediaWidget';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import styles from '@/components/socialMediaWidget/socialMediaWidget.module.css';

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = React.useState(false);

  React.useEffect(() => {
        setMounted(true);
      }, []);
    
  if (!mounted) return null;

  return (
    <main>
        <section className="w-fit">
          <div className="h-full w-[20rem]">
            <h1>Contact Me!</h1>
            {/* <div className="m-0 p-0">
              LinkedIn: 
              <SocialIcon 
                  url="https://www.linkedin.com/in/thomas-callen-410a11252" 
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.socialIcon} 
                  style={{ height: 32, width: 32 }}
              />
            </div>
            <div className="m-0 p-0">
              Github: 
              <SocialIcon 
                  url="https://github.com/thomasity" 
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.socialIcon} 
                  style={{ height: 32, width: 32 }} 
                  bgColor={theme === 'dark' ? '#F9FAFB' : '#1F2937'} 
                  fgColor={theme === 'light' ? '#F9FAFB' : '#1F2937'} 
              />
            </div> */}
          </div>
          <div className="w-fit">
            <ContactForm />
          </div>
        </section>
    </main>
  );

}