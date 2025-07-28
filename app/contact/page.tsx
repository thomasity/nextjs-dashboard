import React from 'react';
import ContactForm from '@/components/contactForm';

export default function Page() {

  return (
    <main>
        <section className="w-fit">
          <div className="h-full w-[20rem]">
            <h1>Contact Me!</h1>
          </div>
          <div className="w-fit">
            <ContactForm />
          </div>
        </section>
    </main>
  );

}