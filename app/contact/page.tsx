import React from 'react';
import ContactForm from '@/components/contactForm';
import styles from './contact.module.css';

export default function Page() {

  return (
    <main className={styles['page-wrapper']}>
        <section className={styles['section-wrapper']}>
          <h1>Contact Me!</h1>
          <ContactForm />
        </section>
    </main>
  );

}