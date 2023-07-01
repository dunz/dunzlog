import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Profile: FC = () => {
  return (
    <article className="flex flex-col items-center gap-2">
      <Image
        src="https://avatars.githubusercontent.com/u/25737303?v=4"
        alt="dunz"
        width={140}
        height={140}
        className="rounded-full"
      />
      <p className="text-3xl font-black">Hi, I`m DongJu</p>
      <p className="text-xl font-black">Frontend Developer</p>
      <p className="text-sm">누구나 쉽게 접근할 수 있는 서비스를 만듭니다.</p>
      <Link href="/contact" className="button-primary rounded-full p-4 py-1">
        Contact Me
      </Link>
    </article>
  );
};

export default Profile;
