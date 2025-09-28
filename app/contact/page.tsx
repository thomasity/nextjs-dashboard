import React from 'react';
import ContactForm from '@/components/contactForm';
import Link from 'next/link';

export default function Page() {

  return (
    <div className="page-wrapper justify-center">
      <main className="document space-y-8">
        <div>
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-(--subtle-font-color) !text-xl">To get in touch with me, please email me at <Link href="mailto:tcallen1001@gmail.com"className="font-bold text-[var(--font-color)] !text-xl underline">tcallen1001@gmail.com</Link> or fill out the form below.</p>
        </div>
        <div>
          <h2 className="mb-4">Contact</h2>
          <ContactForm />
        </div>
      </main>
    </div>
  );

}