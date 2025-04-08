import React, { ReactNode } from 'react';

const RightSide = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex items-center gap-3">
        {children}
    </div>
  );
};

export default RightSide;
