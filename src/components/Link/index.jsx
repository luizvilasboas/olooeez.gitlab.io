import { twMerge } from 'tailwind-merge';

const Link = ({ href, className, blank = false, children, ...restProps }) => {
  const combinedClasses = twMerge(
    'hover:text-slate-300 underline transition',
    className,
  );

  return (
    <a
      className={combinedClasses}
      href={href}
      target={blank ? '_blank' : undefined}
      rel={blank ? 'noopener noreferrer' : undefined}
      {...restProps}
    >
      {children}
    </a>
  );
};

export default Link;
