import React from 'react';

const DashboardHeader = ({headertitle}: { headertitle?: string }) => {
  return (
    <div>
      <div className="px-4 py-2 flex items-center mb-2">
        <p className="w-[20%] text-[#0671B2] text-3xl font-black">Loani</p>
        <p className="text-3xl mb-0 pl-5 font-extrabold">{headertitle}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
