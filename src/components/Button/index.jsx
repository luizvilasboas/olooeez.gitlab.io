import { twMerge } from 'tailwind-merge';

const Button = ({ className, children, ...restProps }) => {
  const combinedClasses = twMerge(
    'bg-zinc-500 w-full p-3 font-bold rounded-md hover:bg-zinc-600 transition text-white',
    className,
  );

  return <button className={combinedClasses} {...restProps}>{children}</button>;
};

export default Button;
