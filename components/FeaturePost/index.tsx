import { FC } from 'react';

import PostCard from '@/components/PostCard';
import { SimplePost } from '@/models/post';

type FeaturePostProps = {
  list: SimplePost[];
};

const PostGrid: FC<FeaturePostProps> = ({ list }) => {
  return (
    <article>
      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list?.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PostGrid;
