import { Metadata } from 'next';
import { FC } from 'react';

import Container from '@/components/Container';
import PostGrid from '@/components/FeaturePost';
import Tags from '@/components/Tags';
import { getSimplePostList } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Posts',
  description: '포스트 페이지',
};

type PostsProps = {
  searchParams: {
    tag?: string;
  };
};

const Posts: FC<PostsProps> = ({ searchParams: { tag } }) => {
  const postDataList = getSimplePostList();
  const filteredPostDataList = tag ? postDataList.filter(({ tags }) => tags.includes(tag)) : postDataList;
  const tags = [...new Set(postDataList.map(({ tags }) => tags).flat())];
  return (
    <Container className="flex gap-10">
      <section className="grow">
        <PostGrid list={filteredPostDataList} />
      </section>
      <aside className="w-40 shrink-0">
        <Tags tags={tags} />
      </aside>
    </Container>
  );
};

export default Posts;
