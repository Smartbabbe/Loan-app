'use client';

import React, { ReactNode } from 'react';

const LeftRightLayout = ({leftSide, rightSide, className}: { leftSide: ReactNode; rightSide: ReactNode; className: string; }) => {
  return (
    <div className={`flex w-4/5 m-auto lg:w-full flex-1 ${className}`}>
      <div className={`hidden lg:block grow md:grow-0 w-[20%] p-4 ${className} `}>{leftSide}</div>
      <div className={`grow bg-gray-200 border rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl pt-[2rem] px-[2rem] lg:px-[3rem] ${className}`}>
        {rightSide}
      </div>
    </div>
  );
};

export default LeftRightLayout;
