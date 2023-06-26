import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Profile: FC = () => {
  return (
    <article className="flex flex-col items-center gap-2">
      <Image
        src="https://avatars.githubusercontent.com/u/25737303?v=4"
        alt="dunz"
        width={240}
        height={240}
        className="rounded-full"
      />
      <p className="text-3xl font-black">Hi, I'm DongJu</p>
      <p className="text-xl font-black">Frontend Developer</p>
      사람들이 쉽게 접근할 수 있는 서비스를 만듭니다.
      <Link href="/contact" className="cursor-pointer rounded-full bg-amber-300 p-4 py-1 hover:opacity-80">
        Contact Me
      </Link>
    </article>
  );
};

export default Profile;
