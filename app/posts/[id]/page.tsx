import { FC } from 'react';

import Container from '@/components/Container';
import { getPostData } from '@/lib/posts';

type PostDetailProps = {
  params: {
    id: string;
  };
};

const PostDetail: FC<PostDetailProps> = async ({ params: { id } }) => {
  const post = await getPostData(id);
  console.log(post);
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
    </Container>
  );
};

export default PostDetail;
