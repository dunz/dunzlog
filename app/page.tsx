import Image from 'next/image';
import Link from 'next/link';

import Profile from '@/components/profile';

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col">
        <Profile />
        <ul>
          <li>asldkf</li>
          <li>asldkf</li>
          <li>asldkf</li>
          <li>asldkf</li>
        </ul>
      </div>
    </div>
  );
}
