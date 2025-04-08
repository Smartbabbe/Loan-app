'use client';

import React, { JSX } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/FormInput';
import Link from 'next/link';
import FormCard from '@/components/ui/Forms/FormCards';
import Header from '@/components/ui/Forms/HeaderTag';
import Description from '@/components/ui/Forms/DescriptionTag';

const SignUpPage = (): JSX.Element => {
  const formFields = [
    { id: 'firstName', label: 'First Name', type: 'text' },
    { id: 'lastName', label: 'Last Name', type: 'text' },
    { id: 'email', label: 'Email Address', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  ];

  return (
    <FormCard>
      <Header title="Welcome!" className={undefined} />
      <Description text="We're glad to have you here! Create an Account" className={'mb-10'} />

      {formFields.map((field) => (
          <div key={field.id} className="w-full">
            <div className="">
              <label
                htmlFor={field.id}
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
          </div>
        ))}

        <div className="pt-4 w-3/4">
          <Link href="/popUpPages/1/individualType" legacyBehavior>
            <a className="">
              <Button buttonName="Sign Up" />
            </a>
          </Link>
        </div>

        <div className="text-center font-light text-[#00160acc] text-lg">
          Already have an account?{' '}
          <a href="#" className="hover:underline">
            Log in
          </a>
          .
        </div>
    </FormCard>
  );
};
export default SignUpPage;
