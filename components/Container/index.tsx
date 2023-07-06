import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container mx-auto max-w-6xl ${className}`}>{children}</div>;
};

export default Container;
