import { FC } from 'react';
import { AiFillCalendar, AiFillTag } from 'react-icons/ai';

import Container from '@/components/Container';
import MarkdownViewer from '@/components/MarkdownViewer';
import { getDetailPost } from '@/lib/posts';

type PostDetailProps = {
  params: {
    id: string;
  };
};

const PostDetail: FC<PostDetailProps> = async ({ params: { id } }) => {
  const { content, date, tags } = await getDetailPost(id);
  return (
    <Container className="flex flex-col gap-10">
      <MarkdownViewer className="max-w-full">{content}</MarkdownViewer>
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
    </Container>
  );
};

export default PostDetail;
