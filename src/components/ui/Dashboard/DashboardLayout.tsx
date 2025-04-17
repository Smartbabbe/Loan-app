import React, { ReactNode } from 'react';

const DashboardLayout = ({children}: { children?: ReactNode }) => {
  return (
    <div>

        <div className="bg-white w-full min-h-screen relative flex flex-col">
            {children}
        </div>
    </div>
  );
};

export default DashboardLayout;
