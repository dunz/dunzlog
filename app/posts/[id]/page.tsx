import { FC } from 'react';
import { AiFillCalendar, AiFillTag } from 'react-icons/ai';

import AdjacentPostCard from '@/components/AdjacentPostCard';
import Container from '@/components/Container';
import MarkdownViewer from '@/components/MarkdownViewer';
import { getDetailPost } from '@/lib/posts';

type PostDetailProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: PostDetailProps) => {
  const { title } = await getDetailPost(id);
  return {
    title,
    description: `포스트 페이지: : ${title}`,
  };
};

const PostDetail: FC<PostDetailProps> = async ({ params: { id } }) => {
  const { content, date, tags, prevPost, nextPost } = await getDetailPost(id);

  return (
    <Container className="flex flex-col gap-10">
      <MarkdownViewer className="max-w-none">{content}</MarkdownViewer>
      <ul>
        <li className="flex items-center gap-1">
          <AiFillCalendar />
          {date}
        </li>
        <li className="flex items-center gap-1">
          <AiFillTag />
          {tags.map((tag) => tag).join(', ')}
        </li>
      </ul>
      <section className="flex">
        {prevPost && <AdjacentPostCard post={prevPost} type="prev" />}
        {nextPost && <AdjacentPostCard post={nextPost} type="next" />}
      </section>
    </Container>
  );
};

export default PostDetail;
