import React from 'react';
import { twMerge } from 'tailwind-merge';

const Typography = ({ variant, className, children, ...restProps }) => {
  const getTypographyClass = () => {
    switch (variant) {
      case 'h1':
        return 'text-3xl font-light';
      case 'p':
        return 'text-lg leading-loose font-light';
      default:
        return '';
    }
  };

  const typographyClass = getTypographyClass();

  return (
    <div className={twMerge(typographyClass, className)} {...restProps}>
      {children}
    </div>
  );
};

export default Typography;
