// pages/api/contact.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  const { name, email, message }: ContactFormData = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or your provider
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: `tommycallen.com - Contact from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
