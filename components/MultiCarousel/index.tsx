'use client';
import { FC, ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type MultiCarouselProps = {
  children?: ReactNode;
  className?: string;
};

const MultiCarousel: FC<MultiCarouselProps> = ({ children, className }) => {
  return (
    <Carousel infinite autoPlay responsive={responsive} className={className}>
      {children}
    </Carousel>
  );
};

export default MultiCarousel;
