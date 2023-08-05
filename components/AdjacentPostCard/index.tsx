import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { SimplePost } from '@/models/post';

type AdjacentPostCardProps = {
  post: SimplePost;
  type: 'prev' | 'next';
};

const AdjacentPostCard: FC<AdjacentPostCardProps> = ({ post, type }) => {
  return (
    <Link href={post.id} className="group relative flex grow flex-col gap-2 bg-gray-900">
      <Image
        src={post.thumbnail}
        alt={post.title}
        className="max-h-60 w-full object-cover opacity-30 blur-[3px] transition-all group-hover:opacity-80 group-hover:blur-0"
        width={300}
        height={300}
      />
      <div className="absolute flex h-full w-full items-center justify-between gap-10 px-10 text-white">
        {type === 'prev' && <FaArrowLeft className="text-2xl transition-all group-hover:text-6xl" />}
        <section className="flex grow flex-col gap-1 rounded-xl p-3 opacity-80 transition-colors group-hover:bg-gray-900">
          <span className="text-sm text-gray-300">{type === 'prev' ? 'Previous' : 'Next'}</span>
          <span className="text-2xl font-bold">{post.title}</span>
          <span className="text-sm font-bold text-gray-200">{post.date}</span>
        </section>
        {type === 'next' && <FaArrowRight className="text-2xl transition-all group-hover:text-6xl" />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
