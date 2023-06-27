import FeaturePost from '@/components/FeaturePost';
import Profile from '@/components/Profile';
import { getPostDataList } from '@/lib/posts';

export default function Home() {
  const postDataList = getPostDataList();

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col gap-10">
        <Profile />
        <FeaturePost list={postDataList} />
      </div>
    </div>
  );
}
