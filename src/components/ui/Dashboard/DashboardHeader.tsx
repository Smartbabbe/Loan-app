import React from 'react';

const DashboardHeader = ({
  headertitle,
  className,
  onMenuButtonClick,
}: {
  headertitle?: string;
  className?: string;
  onMenuButtonClick: () => void;
}) => {
  return (
    <div>
      <div className={`px-4 py-2 flex items-center mb-2 w-full`}>
        <p className="w-[30%] pl-9 text-[#0671B2] max-sm:text-2xl text-xl font-black ">
          Loani
        </p>
        <div className='flex items-center gap-3 justify-end flex max-md:flex-1'>
          <p
            className={`text-3xl mb-0 pl-0 font-extrabold ${className}`}
          >
            {headertitle}
          </p>
          <button className="text-3xl lg:hidden" onClick={onMenuButtonClick}>☰</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
