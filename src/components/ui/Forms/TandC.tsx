import React from 'react';

const TandC = () => {

    const options = [
        {
          id: '1',
          label: 'I accept all Terms & Conditions.',
          type: 'radio',
        },
        {
          id: '2',
          label: 'I accept the Privacy Policy.',
          type: 'radio',
        },
      ];
  return (
    <div className='w-full'>
      <div className="mb-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center gap-4 mt-2">
            <input
              type={option.type}
              value={option.label}
              className="w-5 h-5 accent-primary"
            />
            <span className="mt-2">{option.label}</span>
          </label>
        ))}
      </div>
      <p className='mt-4'>
        I have read, understood & accept all the Terms and Conditions, and
        Privacy Policy for Simple Finance Limited.{' '}
      </p>
    </div>
  );
};

export default TandC;
