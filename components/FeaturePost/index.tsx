import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { PostData } from '@/models/post';

type FeaturePostProps = {
  list: PostData[];
};

const FeaturePost: FC<FeaturePostProps> = ({ list }) => {
  return (
    <article>
      <h2 className="text-3xl">Featured Posts</h2>
      <ul className="mt-2 grid grid-cols-4 gap-6">
        {list?.map(({ id, date, title, thumbnail }) => (
          <li key={id}>
            <Link href={`/posts/${id}`} className="flex flex-col flex-wrap break-words">
              <Image
                src={thumbnail}
                alt="thumbnail"
                width={200}
                height={200}
                className="h-36 w-full rounded-lg object-cover shadow-md"
              />
              {title}
              <br />
              {date}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FeaturePost;
