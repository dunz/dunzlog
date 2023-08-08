import { Metadata } from 'next';

import Container from '@/components/Container';
import PostGrid from '@/components/FeaturePost';
import Profile from '@/components/Profile';
import YouMayLike from '@/components/YouMayLike';
import { getSimplePostList } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Home',
  description: '홈 페이지',
};

export default function Home() {
  const postDataList = getSimplePostList();

  return (
    <Container className="flex flex-col items-center gap-10">
      <Profile />
      <section>
        <h2 className="text-3xl">Featured Posts</h2>
        <PostGrid list={postDataList} />
      </section>
      <YouMayLike list={postDataList} />
    </Container>
  );
}
