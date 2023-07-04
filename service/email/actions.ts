'use server';

import nodemailer from 'nodemailer';

import { Mail, mailSchema } from '@/validation/schema';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});
export const sendEmail = async ({ from, title, message }: Mail) => {
  mailSchema.parse({ from, title, message });
  return await transporter.sendMail({
    from,
    to: process.env.GMAIL_ADDRESS,
    subject: `[Dunz Log] ${title}`,
    text: message,
    html: `
    <h1>${title}</h1>
    <section>${message}</section>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
  });
};
