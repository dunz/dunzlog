import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import Container from '@/components/Container';
import Profile from '@/components/Profile';
const Contact: FC = () => {
  return (
    <Container className="items-center">
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
      <form className="flex w-1/2 flex-col gap-5">
        <legend className="self-center text-2xl">Send me an email</legend>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input type="email" id="email" className="input" />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea id="message" className="input" />
        </fieldset>
        <button type="submit" className="button-primary w-full rounded p-5">
          Send
        </button>
      </form>
    </Container>
  );
};

export default Contact;
