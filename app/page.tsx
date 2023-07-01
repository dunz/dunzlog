import Container from '@/components/Container';
import FeaturePost from '@/components/FeaturePost';
import Profile from '@/components/Profile';
import { getPostDataList } from '@/lib/posts';

export default function Home() {
  const postDataList = getPostDataList();

  return (
    <Container>
      <Profile />
      <FeaturePost list={postDataList} />
    </Container>
  );
}
