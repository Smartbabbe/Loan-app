import React from 'react';

interface ButtonProps {
  buttonName: string;
  className?: string;
}

const Button = ({ buttonName, className }: ButtonProps) => {
  return (
    <button
      className={`btn-primary w-full px py-2.5 rounded-[5px] shadow-primary-button-shadow font-bold text-white text-2xl ${className || ''}`}>
      {buttonName}
    </button>
  );
};

export default Button;
