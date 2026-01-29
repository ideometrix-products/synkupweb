import React, { forwardRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Tag = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      className='
        border border-gray-300 
        sm:border-2 lg:border-2
        w-fit px-4 py-1 
        sm:py-1 sm:px-5 md:px-7 lg:px-7 
        flex justify-center items-center
        rounded-[40px]
        bg-transparent
        hover:text-[#FFFFFF] hover:bg-[#0C5FD8]
        text-xs sm:text-[14px] h-[40px]
    '
      {...props}
      ref={ref}
    >
      {props.children}
    </div>
  );
});

Tag.displayName = 'Tag';
export default Tag;
