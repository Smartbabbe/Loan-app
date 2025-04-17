import Input from '@/components/ui/FormInput';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FormCard from '@/components/ui/Forms/FormCards';
import Header from '@/components/ui/Forms/HeaderTag';
import Description from '@/components/ui/Forms/DescriptionTag';

const BusinessType = () => {
  const businessFields = [
    { id: '1', label: 'Company Name', type: 'text' },
    {
      id: '2',
      label: 'RC Number',
      type: 'number',
      placeholder: 'Please enter your RC number',
    },
  ];

  return (
    <FormCard>
      <Header title="Business Account" className={`text-center`} />
      <Description
        text="Hello! Tell us a little about your business"
        className={'mb-10 text-center'}
      />
      <div className="w-full space-y-5">
        {businessFields.map((field) => (
          <div key={field.id} className="">
            <label
              key={field.id}
              className="font-light py-2 text-[#00160a] text-2xl block"
            >
              {field.label}
            </label>
            <Input
              id={field.id}
              type={field.type}
              className="h-[53px] bg-[#f7f8f8] rounded-[5px] border-none"
            />
          </div>
        ))}

        <div className="pt-7 w-3/4 m-auto">
          <Link href="/dashboardPage/page.tsx" legacyBehavior>
            <a className="w-full">
              <Button buttonName="Create Account" />
            </a>
          </Link>
        </div>
      </div>
    </FormCard>
  );
};

export default BusinessType;
