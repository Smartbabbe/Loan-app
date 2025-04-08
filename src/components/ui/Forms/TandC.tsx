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
          <label key={option.id} className="flex items-center gap-4">
            <input
              type={option.type}
              value={option.label}
              className="mt-2 size-6"
            />
            <span className="mt-2">{option.label}</span>
          </label>
        ))}
      </div>
      <p>
        I have read, understood & accept all the Terms and Conditions, and
        Privacy Policy for Simple Finance Limited.{' '}
      </p>
    </div>
  );
};

export default TandC;
