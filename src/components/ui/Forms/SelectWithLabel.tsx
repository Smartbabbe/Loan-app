import React from 'react';

interface SelectWithLabelProps {
  id: string;
  label: string;
  options: string[];
  placeholder?: string;
  className?: string;
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  id,
  label,
  options,
  placeholder = 'Please select',
  className = '',
}) => {
  return (
    <div className={`flex flex-col w-full max-w-[10rem] md:max-w-[18rem] ${className}`}>
      <label htmlFor={id} className="text-[#00160a] text-sm sm:text-base mb-1">
        {label}
      </label>
      <select
        id={id}
        defaultValue=""
        className="px-3 py-2 text-sm sm:text-base bg-gray-100 rounded outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWithLabel;
