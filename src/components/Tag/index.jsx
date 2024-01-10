import { twMerge } from 'tailwind-merge';

const Tag = ({ className, children, ...restProps }) => {
  const combinedClasses = twMerge(
    'bg-zinc-100 py-3 px-5 rounded-xl',
    className,
  );

  return <div className={combinedClasses}>
    {children}
  </div>;
};

export default Tag;
