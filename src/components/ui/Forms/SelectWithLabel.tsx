import React from 'react';

interface SelectWithLabelProps {
  id: string;
  label: string;
  options: string[];
  placeholder?: string;
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  id,
  label,
  options,
  placeholder = 'Please select',
}) => {
  return (
    <div className="flex flex-col w-[250px]">
      <label htmlFor={id} className="font text-[#00160a] text-md">
        {label}
      </label>
      <select
        id={id}
        defaultValue="" 
        className="h-[35px] outline-none mt-4 mb-8 bg-gray-100 rounded-[2px] border-none"
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
