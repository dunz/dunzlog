import { FC } from 'react';

import Container from '@/components/Container';
import Profile from '@/components/Profile';

const About: FC = () => {
  return (
    <Container className="flex flex-col items-center gap-10">
      <Profile />
      <article className="flex flex-col gap-5 rounded-lg bg-gray-200 p-10 text-center">
        <section>
          <h2 className="text-3xl">Who am I?</h2>
          <p className="text-xl">개발을 사랑하는 프론트엔드 개발자</p>
          <p className="text-sm">사람과 디자인을 담은 웹앱을 만듭니다.</p>
        </section>

        <section>
          <h2 className="text-3xl">Career</h2>
          <p className="text-sm">2012.04 ~ 현재</p>
          <p className="text-sm">프론트엔드 개발자로 일하고 있습니다.</p>
        </section>

        <section>
          <h2 className="text-3xl">Skills</h2>
          <p className="text-sm">React, Next.js, TypeScript, Tailwind CSS, Storybook, Jest, Testing Library</p>
        </section>
      </article>
    </Container>
  );
};

export default About;
