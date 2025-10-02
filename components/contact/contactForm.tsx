// components/ContactForm.tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" required placeholder="Your name" className="w-full" />
      <input name="email" type="email" required placeholder="Your email" className="w-full" />
      <textarea name="message" required placeholder="Your message" className="w-full h-48" />
      <button type="submit" className="button-blue">Send Email</button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
