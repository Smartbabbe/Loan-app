'use client';

import React from 'react';
import TandC from '../Forms/TandC';
import Button from '../Button';
import FormSectionTitle from '../Forms/FormSectionTitle';
import TextInputWithLabel from '../Forms/TextInputWithLabel';
import SelectWithLabel from '../Forms/SelectWithLabel';
import FormInputGroup from '../Forms/FormInputGroup';
import Link from 'next/link';

const IndividualProfile = () => {
  const personalInfoFields = [
    { id: 'firstName', label: 'First Name', type: 'text', order: 1 },
    { id: 'lastName', label: 'Last Name', type: 'text', order: 1 },
    { id: 'dob', label: 'Date of Birth', type: 'date', order: 3 },
    { id: 'email', label: 'Email Address', type: 'email', order: 3 },
    { id: 'phone', label: 'Phone Number', type: 'number', order: 3 },
    { id: 'address', label: 'Address', type: 'text', order: 3 },
    { id: 'state', label: 'State', type: 'text', order: 3 },
  ];

  const gender = {
    id: 'gender',
    label: 'Gender',
    options: ['Female', 'Male', 'Choose not to say'],
  };

  const nextOfKinFirst = {
    id: 'nok',
    label: 'Next of kin',
    options: [
      'Father',
      'Mother',
      'Sister',
      'Brother',
      'Spouse',
      'Business Partner',
      'Others',
    ],
  };

  const nextOfKinFields = [
    { id: 'nokName', label: 'Name', type: 'text' },
    { id: 'nokPhone', label: 'Phone Number', type: 'number' },
    { id: 'nokEmail', label: 'Email Address', type: 'email' },
  ];

  const govIdTypes = {
    id: 'govIdType',
    label: 'Select ID Type',
    options: [
      'BVN',
      'NIN',
      `Driver's License`,
      'International Passport',
      `Permanent Voter's Card`,
    ],
  };

  const uploadField = {
    id: 'uploadId',
    label: 'Upload Government ID',
    type: 'file',
  };

  const BVNField = {
    id: 'bvn',
    label: 'Bank Verification Number',
    type: 'number',
  };

  return (
    <div className=" bg-white py-4 px-7 mb-7 rounded-lg h-fit">
      {/* Personal info */}
      <div className="">
        <FormSectionTitle title={'Personal Information'} className={''} />
        <div className="grid grid-cols-4 gap-x-16">
          <FormInputGroup fields={personalInfoFields} />
          <div className="order-2">
            <SelectWithLabel
              id={gender.id}
              label={gender.label}
              options={gender.options}
              placeholder="Select a gender"
            />
          </div>
        </div>
      </div>
      <hr />

      {/* Next of kin */}
      <div className="mt-7">
        <FormSectionTitle title={'Next of Kin Information'} className={''} />
        <div className="grid grid-cols-4 gap-x-16">
          <SelectWithLabel
            id={nextOfKinFirst.id}
            label={nextOfKinFirst.label}
            options={nextOfKinFirst.options}
            placeholder="Select a relationship"
          />
          <FormInputGroup fields={nextOfKinFields} />
        </div>
      </div>
      <hr />

      {/* Government issued ID */}
      <div className="flex gap-[10rem] items-center mt-7">
        <div>
          <FormSectionTitle
            title={'Government-issued ID Verification'}
            className={''}
          />

          <div className="flex gap-12 justify-between w-full">
            <SelectWithLabel
              id={govIdTypes.id}
              label={govIdTypes.label}
              options={govIdTypes.options}
              placeholder="Select an ID type"
            />
            <TextInputWithLabel
              id={uploadField.id}
              label={uploadField.label}
              type={uploadField.type}
            />
          </div>
        </div>

        <div className="">
          <FormSectionTitle title={'BVN Verification'} className={''} />
          <TextInputWithLabel
            id={BVNField.id}
            label={BVNField.label}
            type={BVNField.type}
          />
        </div>
      </div>

      <hr />
      <div className="flex items-center mt-5">
        <TandC />
        <div className="w-1/2">
          <Link href="/dashboardPage/1/Business-profile" legacyBehavior>
            <a href="">
              <Button buttonName={'Next'} className="mx-4" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndividualProfile;
