import { FC } from 'react';

import MultiCarousel from '@/components/MultiCarousel';
import PostCard from '@/components/PostCard';
import { SimplePost } from '@/models/post';

type YouMayLikeProps = {
  list: SimplePost[];
};

const YouMayLike: FC<YouMayLikeProps> = ({ list }) => {
  return (
    <article className="w-full">
      <h2 className="text-3xl">You May Like</h2>
      <MultiCarousel className="mt-2">
        {list?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </MultiCarousel>
    </article>
  );
};

export default YouMayLike;
