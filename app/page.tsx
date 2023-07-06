import Container from '@/components/Container';
import FeaturePost from '@/components/FeaturePost';
import Profile from '@/components/Profile';
import { getPostDataList } from '@/lib/posts';

export default function Home() {
  const postDataList = getPostDataList();

  return (
    <Container className="flex flex-col items-center gap-10">
      <Profile />
      <FeaturePost list={postDataList} />
    </Container>
  );
}
