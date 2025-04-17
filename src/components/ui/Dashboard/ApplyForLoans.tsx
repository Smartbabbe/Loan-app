import React from 'react';
import TextInputWithLabel from '../Forms/TextInputWithLabel';
import SelectWithLabel from '../Forms/SelectWithLabel';
import FormSectionTitle from '../Forms/FormSectionTitle';
import TandC from '../Forms/TandC';
import Button from '../Button';
import Link from 'next/link';

const ApplyForLoans = () => {
  type Field = {
    id: string;
    label: string;
    type: 'text' | 'select';
    options?: string[];
    placeholder?: string;
  };

  const loanDetailsFields: Field[] = [
    {
      id: 'loanAmount',
      label: 'Loan Amount',
      type: 'text',
      placeholder: 'Enter amount',
    },
    {
      id: 'loanTenure',
      label: 'Select Loan Tenure',
      type: 'select',
      options: ['3 Months', '6 Months', '12 Months'],
      placeholder: 'Select duration',
    },
  ];

  const loanCalculatorFields = [
    { id: 'calcAmount', label: 'Loan Amount', type: 'text' },
    {
      id: 'calcTenure',
      label: 'Select Loan Tenure',
      type: 'select',
      options: ['3 Months', '6 Months', '12 Months'],
    },
    { id: 'loanRate', label: 'Loan Rate', type: 'text', placeholder: '4.5%' },
  ];

  return (
    <div className="w-3/5 bg-white shadow-2xl rounded-md p-5 mb-5">
      <FormSectionTitle title="Loan Details" className="" />
      <div className="flex gap-x-16">
        {loanDetailsFields.map((field) =>
          field.type === 'select' ? (
            <SelectWithLabel
              key={field.id}
              id={field.id}
              label={field.label}
              options={field.options || []}
              placeholder={field.placeholder}
            />
          ) : (
            <TextInputWithLabel
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          )
        )}
      </div>

      <div className="mt-2">
        <TandC />
      </div>

      <div className="mt-6 w-1/2">
        <Link href="/dashboardPage/1/Individual-profile" legacyBehavior>
          <a className="">
            <Button buttonName={'Submit'} className=" px-2 my-6" />{' '}
          </a>
        </Link>
      </div>

      <hr className="h-0.5 bg-gray-200 my-8" />

      <FormSectionTitle title="Loan Calculator" className="" />
      <p>Use this loan calculator to find out your monthly repayment rate.</p>
      <div className="flex gap-x-12 mt-6">
        {loanCalculatorFields.map((field) =>
          field.type === 'select' ? (
            <SelectWithLabel
              key={field.id}
              id={field.id}
              label={field.label}
              options={field.options || []}
              placeholder={field.placeholder}
            />
          ) : (
            <TextInputWithLabel
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          )
        )}
      </div>

      <div className="mt-2 w-1/2">
        <Button buttonName="Calculate Loan" className="w-[25rem]" />
      </div>

      <FormSectionTitle title="Pending Loans" className="mt-8" />
      <p>You have no pending loans</p>
    </div>
  );
};

export default ApplyForLoans;
