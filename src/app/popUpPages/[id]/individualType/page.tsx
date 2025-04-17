'use client';

import React, { useState } from 'react';
import Input from '@/components/ui/FormInput';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FormCard from '@/components/ui/Forms/FormCards';
import Header from '@/components/ui/Forms/HeaderTag';
import Description from '@/components/ui/Forms/DescriptionTag';

const IndividualType = () => {
  const [selectedIDType, setSelectedIDType] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const IndividualFields = [
    {
      id: '1',
      label: 'Identification Type',
      type: 'radio',
      options: [
        'BVN',
        'NIN',
        `Driver's License`,
        'International Passport',
        `Permanent Voter's Card`,
      ],
    },
    {
      id: '2',
      label: 'Identification Number',
      type: 'number',
      placeholder: 'Please enter your Identification number',
    },
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedIDType(option);
    setShowOptions(false);
  };

  return (
    <FormCard>
      <Header title="Individual Account" className={undefined} />
      <Description text="Hello! Let's get to know you!" className={'mb-10'} />

      {IndividualFields.map((field) => (
        <div key={field.id} className="w-full mb-6">
          <label
            key={field.id}
            className="font-light py-2 text-[#00160a] text-2xl block"
          >
            {field.label}
          </label>

          {field.type === 'radio' ? (
            <>
              <Input
                id={field.id}
                type="text"
                readOnly
                value={selectedIDType}
                placeholder="Select Identification Type"
                onClick={() => setShowOptions((prev) => !prev)}
                className="h-[53px] bg-[#f7f8f8] rounded-[5px] border-none cursor-pointer"
              />
              {showOptions && (
                <div className="flex flex-col gap-2 mt-2">
                  {field.options?.map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-2 px-4 py-3 border rounded-md cursor-pointer transition-colors ${
                        selectedIDType === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300'
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      <input
                        type="radio"
                        name="id-type"
                        value={option}
                        checked={selectedIDType === option}
                        onChange={() => handleOptionSelect(option)}
                        className="hidden"
                      />
                      <span className="text-base">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="h-[53px] bg-[#f7f8f8] rounded-[5px] border-none"
            />
          )}
        </div>
      ))}

      <div className="pt-5 w-3/4">
        <Link href="/popUpPages/1/businessType" legacyBehavior>
          <a className="w-full">
            <Button buttonName="Create Account" />
          </a>
        </Link>
      </div>
    </FormCard>
  );
};

export default IndividualType;
