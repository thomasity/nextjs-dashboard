import React from 'react';
import ContactForm from '@/components/contactForm';
import styles from './contact.module.css';

export default function Page() {

  return (
    <main className={styles['page-wrapper']}>
        <section className={styles['section-wrapper']}>
          <h2 className="m-4">Contact Me</h2>
          <ContactForm />
        </section>
    </main>
  );

}