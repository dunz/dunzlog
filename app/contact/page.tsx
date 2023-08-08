import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import MailForm from '@/app/contact/MailForm';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: '컨택트 페이지',
};
const Contact: FC = () => {
  return (
    <Container className="flex flex-col items-center gap-10">
      <h1 className="text-4xl">Contact Me</h1>
      <section>
        <p>zergcake@gmail.com</p>
        <section className="mt-5 flex justify-center gap-5">
          <Link href="https://github.com/dunz" target="_blank">
            <AiFillGithub className="text-3xl" />
          </Link>
          <Link href="https://www.instagram.com/vindiejay/" target="_blank">
            <AiFillInstagram className="text-3xl" />
          </Link>
          <Link href="https://www.youtube.com/@dun3063" target="_blank">
            <AiFillYoutube className="text-3xl" />
          </Link>
        </section>
      </section>
      <MailForm />
    </Container>
  );
};

export default Contact;
