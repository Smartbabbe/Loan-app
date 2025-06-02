import React, { ReactNode } from 'react';

const RightSide = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col overflow-y-auto lg:flex-row items-center gap-3">
        {children}
    </div>
  );
};

export default RightSide;
