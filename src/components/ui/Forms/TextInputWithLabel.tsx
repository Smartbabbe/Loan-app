import React from 'react';
import Input from '../FormInput';


interface TextInputWithLabelProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}


const TextInputWithLabel = ({ id, label, type, placeholder }: TextInputWithLabelProps ) => (
  <div className="flex flex-col w-[250px]">
    <label htmlFor={id} className="font text-[#00160a] text-md">
      {label}
    </label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className="h-[35px] outline-none mt-4 mb-8 bg-gray-100 rounded-[2px] border-none"
    />
  </div>
);

export default TextInputWithLabel;
