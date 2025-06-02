// app/dashboardPage/[id]/dashboardPageWrapper.tsx
'use client';

import React, { useState, useEffect } from 'react';
import LeftSideBar from '@/components/ui/Dashboard/LeftSideBar';
import RightSide from '@/components/ui/Dashboard/RightSide';
import DashboardHeader from '@/components/ui/Dashboard/DashboardHeader';
import DashboardLayout from '@/components/ui/Dashboard/DashboardLayout';
import LeftRightLayout from '@/components/ui/Dashboard/LeftRightLayout';
import BlankDashboardPage from '@/app/dashboardPage/[id]/dashboardBlank/page';
import FullDashboardPage from '@/components/ui/Dashboard/DashboardFull';
import ApplyForLoans from '@/components/ui/Dashboard/ApplyForLoans';
import ManageLoans from '@/components/ui/Dashboard/ManageLoans';
import Transactions from '@/components/ui/Dashboard/Transactions';
import Query from '@/components/ui/Dashboard/Query';
import Profile from '@/components/ui/Dashboard/Profile';
import Wallet from '@/components/ui/Dashboard/Wallet';
import IndividualProfile from '@/components/ui/Dashboard/IndividualProfile';
import BusinessProfile from '@/components/ui/Dashboard/BusinessProfile';

type DashboardPageWrapperProps = {
  defaultMenu?: string;
  headerTitle?: string;
};

const DashboardPageWrapper: React.FC<DashboardPageWrapperProps> = ({
  defaultMenu = 'Dashboard',
  headerTitle,
}) => {
  const [activeMenu, setActiveMenu] = useState(defaultMenu);
  // State to control the visibility of the leftSide div
  const [showLeftSide, setShowLeftSide] = useState(false); 

  // Function to toggle the visibility of the leftSide div
  const toggleLeftSide = () => {
    setShowLeftSide((prev) => !prev);
  };

  // Function to hide the leftSide div
  const hideLeftSide = () => {
    setShowLeftSide(false);
  };

  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(menuLabel);
    hideLeftSide(); // Hide leftSide when a menu item is selected
  };

  // Effect to handle clicks outside the leftSide div
  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      // Check if the click occurred outside the leftSide div and the menu button
      const leftSideDiv = document.querySelector('.left-side-panel'); // Add a class to LeftSideBar container
      const menuButton = document.querySelector('.lg\\:hidden'); // Targeting the menu button

      if (
        showLeftSide &&
        leftSideDiv &&
        !leftSideDiv.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        hideLeftSide();
      }
    };

    if (showLeftSide) {
      document.body.addEventListener('click', handleBodyClick);
    }

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [showLeftSide]); // Rerun effect when showLeftSide changes

  const renderPage = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <BlankDashboardPage />;
      case 'DashboardFull':
        return <FullDashboardPage />;
      case 'Apply for loans':
        return <ApplyForLoans />;
      case 'Manage loans':
        return <ManageLoans />;
      case 'Transactions':
        return <Transactions />;
      case 'Wallet':
        return <Wallet />;
      case 'Query':
        return <Query />;
      case 'Profile':
        return <Profile />;
      case 'Individual Profile':
        return <IndividualProfile />;
      case 'Business Profile':
        return <BusinessProfile />;
      default:
        return <div className="p-4">Page not found.</div>;
    }
  };

  return (
    <DashboardLayout>
      <DashboardHeader 
        headertitle={headerTitle || activeMenu} 
        className="max-md:text-xl" 
        onMenuButtonClick={toggleLeftSide} // Pass the toggle function
      />
      <LeftRightLayout
        leftSide={<LeftSideBar onMenuClick={handleMenuClick} />}
        rightSide={<RightSide>{renderPage()}</RightSide>}
        className=""
        showLeftSide={showLeftSide}
      />
    </DashboardLayout>
  );
};

export default DashboardPageWrapper;