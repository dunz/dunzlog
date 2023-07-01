import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
};

export default Container;
