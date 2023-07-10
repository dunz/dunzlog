import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { SimplePost } from '@/models/post';

type PostCardProps = {
  post: SimplePost;
};

const PostCard: FC<PostCardProps> = ({ post: { id, date, title, thumbnail, tags } }) => {
  return (
    <Link
      href={`/posts/${id}`}
      className="m-2 flex flex-col flex-wrap overflow-hidden break-words rounded-lg border-t-2 shadow-md hover:shadow-lg"
    >
      <Image src={thumbnail} alt="thumbnail" width={200} height={200} className="h-36 w-full border-b-2 shadow-sm" />
      <section className="flex w-full flex-col items-center gap-4 p-2">
        <time className="self-end text-gray-500">{date}</time>
        <h2 className="w-full truncate text-center font-bold">{title}</h2>
        <h3 className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blue-400 px-2 text-white">
              {tag}
            </span>
          ))}
        </h3>
      </section>
    </Link>
  );
};

export default PostCard;
