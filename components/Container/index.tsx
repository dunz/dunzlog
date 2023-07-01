import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className={`flex flex-col gap-10 ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
