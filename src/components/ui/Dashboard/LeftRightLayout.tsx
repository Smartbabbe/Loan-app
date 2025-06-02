// components/ui/Dashboard/LeftRightLayout.tsx
import React, { ReactNode } from 'react';

const LeftRightLayout = ({
  leftSide,
  rightSide,
  className,
  showLeftSide,
}: {
  leftSide: ReactNode;
  rightSide: ReactNode;
  className: string;
  showLeftSide: boolean;
}) => {
  return (
    <div className={`flex w-4/5 m-auto lg:w-full flex-1 ${className}`}>
      <div
        className={`
          ${showLeftSide ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}
          max-lg:fixed max-lg:top-[4.5rem] max-lg:left-0 max-lg:h-fit max-lg:w-fit max-lg:max-w-xs
          transition-transform duration-400 ease-in-out
          lg:block rounded-2xl max-md:shadow-2xl max-lg:bg-gray-950 z-20 grow md:grow-0 w-[20%] p-4
        `}
      >
        {leftSide}
      </div>
      <div
        className={`grow bg-gray-200 border rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl pt-[2rem] px-[2rem] lg:px-[3rem]`}
      >
        {rightSide}
      </div>
    </div>
  );
};

export default LeftRightLayout;



