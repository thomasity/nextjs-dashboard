// pages/api/contact.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  console.log(1)

  const { name, email, message }: ContactFormData = await req.json();

  if (!name || !email || !message) return 400;

  console.log(name, email, message)

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or your provider
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log(transporter)

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: `New contact from ${name}`,
      text: message,
    });

    console.log("OK")

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
