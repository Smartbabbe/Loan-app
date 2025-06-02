import React from 'react';

interface TextInputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  id,
  label,
  className = '',
  type = 'text',
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full max-w-[10rem] md:max-w-[18rem] ${className}`}>
      <label htmlFor={id} className="text-[#00160a] text-sm sm:text-base mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="px-3 py-2 text-sm sm:text-base bg-gray-100 rounded outline-none"
        {...props}
      />
    </div>
  );
};

export default TextInputWithLabel;
