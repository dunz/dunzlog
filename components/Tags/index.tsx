import Link from 'next/link';
import { FC } from 'react';

type TagsProps = {
  tags: string[];
};
const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <section>
      <h2>
        <strong>Tags</strong>
      </h2>
      <ul>
        <li>
          <Link href="/posts">All Post</Link>
        </li>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`?tag=${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tags;
