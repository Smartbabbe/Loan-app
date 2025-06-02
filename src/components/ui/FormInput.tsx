import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className = '', type = 'text', id, ...props }) => {
  return (
    <div className={`bg-[#F7F8F8] w-full max-w-full rounded-sm ${className}`}>
      <input
        className="w-full px-4 h-full text-base border-none outline-none bg-transparent placeholder:text-gray-500"
        type={type}
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
