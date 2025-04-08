import React from 'react';

interface DescriptionProps {
  text: string;
  className: string;
}

const Description: React.FC<DescriptionProps> = ({ text, className }) => {
    return <p className={`font-normal text-[#00160a] text-2xl mb-1 ${className}`} >{text}</p>;
    ;
  };

export default Description;
