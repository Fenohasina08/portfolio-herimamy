import React from 'react';
import useInView from '../../hooks/useInView';

const directions = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
  scale: 'scale-90',
};

const AnimateOnScroll = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
  const translateClass = directions[direction] || directions.up;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : `opacity-0 ${translateClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;