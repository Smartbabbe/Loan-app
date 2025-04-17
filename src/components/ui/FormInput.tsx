import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ className = '', type = 'text', id, ...props }) => {
    return (
      <>
        <div className="bg-[#F7F8F8] grow md:border-0 h-full rounded-sm ">
            <input
              className={`px-3 py-3 leading-[0px] m-0 text-sm md:text-lg h-full w-full border-0 outline-none bg-transparent ${className}`}
              type={type}
              id={id}
              {...props}
            />
          </div>
      </>
    );
  };

export default Input;
