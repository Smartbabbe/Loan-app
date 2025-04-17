'use client';

import React, { useState } from 'react';
import LeftSideBar from '@/components/ui/Dashboard/LeftSideBar';
import RightSide from '@/components/ui/Dashboard/RightSide';
import DashboardHeader from '@/components/ui/Dashboard/DashboardHeader';
import DashboardLayout from '@/components/ui/Dashboard/DashboardLayout';
import LeftRightLayout from '@/components/ui/Dashboard/LeftRightLayout';
import BlankDashboardPage from './dashboardBlank/page';
import FullDashboardPage from './dashboardFull/page';
import ApplyForLoans from '@/components/ui/Dashboard/ApplyForLoans';
import ManageLoans from '@/components/ui/Dashboard/ManageLoans';
import Wallet from '@/components/ui/Dashboard/Wallet';
import Transactions from '@/components/ui/Dashboard/Transactions';
import Query from '@/components/ui/Dashboard/Query';
import Profile from '@/components/ui/Dashboard/Profile';
import IndividualProfile from '@/components/ui/Dashboard/IndividualProfile';


const Page = () => {
  // State to store active menu
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Function to change active menu and content
  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(menuLabel);
  };

  return (
    <div>
      <DashboardLayout>
        <DashboardHeader headertitle={'Overview'} className='' />
        <LeftRightLayout
          leftSide={<LeftSideBar onMenuClick={handleMenuClick} />}
          rightSide={<RightSide>
            {activeMenu === 'Dashboard' && <BlankDashboardPage />}
            {activeMenu === 'DashboardFull' && <FullDashboardPage />}
            {activeMenu === 'Apply for loans' && <ApplyForLoans />}
            {activeMenu === 'Individual Profile' && <IndividualProfile />}
            {activeMenu === 'Manage loans' && <ManageLoans />}
            {activeMenu === 'Wallet' && <Wallet />}
            {activeMenu === 'Transactions' && <Transactions />}
            {activeMenu === 'Query' && <Query />}
            {activeMenu === 'Profile' && <Profile />}
          </RightSide>} className={''}        />
      </DashboardLayout>
    </div>
  );
};

export default Page;
