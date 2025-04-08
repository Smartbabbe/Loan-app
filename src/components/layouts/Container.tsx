import React, { ReactNode } from 'react';

type props = {
  children: ReactNode;
};
const Container = ({ children }: props) => {
  return (
    <div className="xl:max-w-[73.5rem] px-6 md:px-0 md:w-[95%] relative z-20 mx-auto">
      {children}
    </div>
  );
};

export default Container;
