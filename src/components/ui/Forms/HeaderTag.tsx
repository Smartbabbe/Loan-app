import React, { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  className: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return <h1 className={`font-extrabold text-[#00160a] text-4xl mb-4 ${className}`}>{title}</h1>;
};

export default Header;