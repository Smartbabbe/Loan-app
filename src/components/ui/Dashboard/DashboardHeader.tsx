import React from 'react';

const DashboardHeader = ({headertitle, className}: { headertitle?: string, className?: string }) => {
  return (
    <div>
      <div className={`px-4 py-2 flex items-center mb-2 w-full`}>
        <p className="w-[20%] pl-9 text-[#0671B2] text-3xl font-black max-md:flex-1">Loani</p>
        <p className={`text-3xl mb-0 pl-5 font-extrabold justify-end max-md:flex-1 ${className}`}>{headertitle}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
