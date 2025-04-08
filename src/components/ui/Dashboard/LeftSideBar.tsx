'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

// Icons
import dashboardgridicon from '@/assets/dashboardgridicon.svg';
import applyloansicon from '@/assets/applyloansicon.svg';
import manageloansicon from '@/assets/manageloansicon.svg';
import wallet from '@/assets/walleticon.svg';
import transactionicon from '@/assets/transactionicon.svg';
import queryicon from '@/assets/queryicon.svg';
import profileicon from '@/assets/profileicon.svg';

const LeftSideBar = ({ onMenuClick }: { onMenuClick: (menuLabel: string) => void }) => {
  const pathname = usePathname();
  const { id } = useParams(); // Gets the dynamic [id] from URL

  const navMenu = [
    { id: 1, icon: dashboardgridicon, href: `/dashboardPage/${id}`, label: 'Dashboard' },
    { id: 2, icon: applyloansicon, href: `/dashboardPage/${id}/apply-loans`, label: 'Apply for loans' },
    { id: 3, icon: manageloansicon, href: `/dashboardPage/${id}/Manage-loans`, label: 'Manage loans' },
    { id: 4, icon: wallet, href: `/dashboardPage/${id}/Wallet`, label: 'Wallet' },
    { id: 5, icon: transactionicon, href: `/dashboardPage/${id}/transactions`, label: 'Transactions' },
    { id: 6, icon: queryicon, href: `/dashboardPage/${id}/Query`, label: 'Query' },
    { id: 7, icon: profileicon, href: `/dashboardPage/${id}/Profile`, label: 'Profile' },
    
  ];

  return (
    <div className="mt-10 pl-8">
      <div className="flex flex-col gap-6">
        {navMenu.map((menu) => {
          const isActive = pathname === menu.href;

          return (
            <Link
              key={menu.id}
              href={menu.href}
              onClick={() => onMenuClick(menu.label)} // Call onMenuClick when clicked
              className={`flex items-center gap-4 px-4 py-2 rounded-md transition-all ${
                isActive ? 'text-[#0671b2] font-semibold bg-blue-100' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Image src={menu.icon} alt={`${menu.label} icon`} width={20} height={20} />
              <span>{menu.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideBar;
