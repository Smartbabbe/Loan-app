import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const FormCard: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white w-full relative py-16 container m-auto ${className}`}>
      <div className="w-[85%] md:max-w-[550px] m-auto flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default FormCard;
