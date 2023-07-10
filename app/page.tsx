import Container from '@/components/Container';
import FeaturePost from '@/components/FeaturePost';
import Profile from '@/components/Profile';
import YouMayLike from '@/components/YouMayLike';
import { getSimplePostList } from '@/lib/posts';

export default function Home() {
  const postDataList = getSimplePostList();

  return (
    <Container className="flex flex-col items-center gap-10">
      <Profile />
      <FeaturePost list={postDataList} />
      <YouMayLike list={postDataList} />
    </Container>
  );
}
