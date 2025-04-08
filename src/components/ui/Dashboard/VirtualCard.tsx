import React, { ReactNode } from 'react';



const VirtualCard = ({ className, children }: { className?: string, children?:ReactNode }) => {
  return (
    <div className={`w-3/5 flex justify-center my-5  ${className}`}>
      <div className={`w-full  m-auto shadow-xl bg-gradient-to-b from-[#B353FF] via-gray/50 to-[#7ED1FF] flex flex-col items-center justify-center h-52 rounded-md ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default VirtualCard;
