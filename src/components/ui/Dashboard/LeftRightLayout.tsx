'use client';

import React, { ReactNode } from 'react';

const LeftRightLayout = ({leftSide, rightSide,}: { leftSide: ReactNode; rightSide: ReactNode; }) => {
  return (
    <div className="flex w-full flex-1">
      <div className="grow sm:grow-0 w-[5%] sm:w-[20%] p-4">{leftSide}</div>
      <div className="grow bg-gray-200 border rounded-tl-2xl pt-[2rem] px-[3rem]">
        {rightSide}
      </div>
    </div>
  );
};

export default LeftRightLayout;
