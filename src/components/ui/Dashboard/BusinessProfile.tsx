import React from 'react';
import TextInputWithLabel from '../Forms/TextInputWithLabel';
import SelectWithLabel from '../Forms/SelectWithLabel';
import FormInputGroup from '../Forms/FormInputGroup';
import FormSectionTitle from '../Forms/FormSectionTitle';
import TandC from '../Forms/TandC';
import Button from '../Button';

const BusinessProfileForm = () => {
  const businessDetailsFields = [
    { id: 'rcNumber', label: 'RC Number', type: 'text' },
    { id: 'companyName', label: 'Company Name', type: 'text' },
    { id: 'companyAddress', label: 'Company Address', type: 'text' },
    { id: 'email', label: 'Email Address', type: 'email' },
    { id: 'phone', label: 'Phone Number', type: 'number' },
  ];

  const stateOptions = ['Abia', 'Lagos', 'Kano', 'Rivers', 'Others'];
  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'Limited Liability',
    'Corporation',
  ];

  const directorFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'phone', label: 'Phone Number', type: 'number' },
    { id: 'email', label: 'Email Address', type: 'email' },
  ];

  const relationshipOptions = ['Director', 'Shareholder'];
  const govIdTypes = [
    'BVN',
    'NIN',
    "Driver's License",
    'International Passport',
    "Voter's Card",
  ];

  const registrationDocs = [
    { id: 'uploadCoi', label: 'Upload COI', options: ['PDF', 'Image'] },
    { id: 'uploadMemart', label: 'Upload Memart', options: ['PDF', 'Image'] },
    { id: 'others', label: 'Others', options: ['PDF', 'Image'] },
  ];

  return (
    <div className="bg-white py-4 px-4 sm:px-7 mb-7 box-border rounded-lg overflow-x-hidden h-fit">
      {/* Business Details */}
      <div className="my-7">
        <FormSectionTitle title="Business Details" className={'max-sm:text-2xl max-lg:text-center'} />
        <div className="mt-7 grid grid-col justify-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16">
          <FormInputGroup fields={businessDetailsFields} />
          <SelectWithLabel
            id="typeOfBusiness"
            label="Type of Business"
            options={businessTypes}
            placeholder="Select business type"
          />
          <SelectWithLabel
            id="state"
            label="State"
            options={stateOptions}
            placeholder="Select state"
          />
        </div>
      </div>

      {/* Director/Shareholder 1 */}
      <div className="my-12">
        <div className=''>
          <FormSectionTitle title="Director/Shareholder 1" className={'max-sm:text-xl max-lg:text-center'} />
        </div>
        <div className="mt-9 grid grid-col gap-y-6 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16">
          <SelectWithLabel
            id="role1"
            label="Director/Shareholder"
            options={relationshipOptions}
            placeholder="Select role"
          />
          <FormInputGroup
            fields={directorFields.map((field) => ({
              ...field,
              id: `${field.id}1`,
            }))}
          />
        </div>
      </div>

      {/* Government issued ID */}
      <div className="my-7">
        <FormSectionTitle
          title="Government-issued ID Verification"
          className={'max-lg:text-center'}
        />
        <div className="mt-7 flex lg:w-full max-sm:justify-center max-md:flex-wrap gap-7 md:gap-16">
          <SelectWithLabel
            id="govIdType1"
            label="Select ID Type"
            options={govIdTypes}
            placeholder="Select ID type"
          />
          <TextInputWithLabel
            id="uploadId1"
            label="Upload Government ID"
            type="file"
          />
        </div>
      </div>

      <div className="mt-9 justify-center">
        <FormSectionTitle title="BVN Verification" className={'max-sm:text-2xl max-lg:text-center'} />
        <div className="max-lg:mx-auto w-fit">
          <TextInputWithLabel
            id="bvn1"
            label="Bank Verification Number"
            type="number"
          />          
        </div>

      </div>

      {/* Director/Shareholder 2 */}
      <div className="my-9">
        <FormSectionTitle title="Director/Shareholder 2" className={'max-sm:text-xl max-lg:text-center'} />
        <div className="grid grid-col gap-y-6 max-sm:justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16">
          <SelectWithLabel
            id="role2"
            label="Director/Shareholder"
            options={relationshipOptions}
            placeholder="Select role"
          />
          <FormInputGroup
            fields={directorFields.map((field) => ({
              ...field,
              id: `${field.id}2`,
            }))}
          />
        </div>
      </div>

      {/* Government issued ID */}
      <div className="my-7">
        <FormSectionTitle
          title="Government-issued ID Verification"
          className={'max-lg:text-center'}
        />
        <div className="mt-7 flex gap-7 max-sm:justify-center lg:w-full max-md:flex-wrap md:gap-16">
          <SelectWithLabel
            id="govIdType2"
            label="Select ID Type"
            options={govIdTypes}
            placeholder="Select ID type"
          />
          <TextInputWithLabel
            id="uploadId2"
            label="Upload Government ID"
            type="file"
          />
        </div>
      </div>

      <div>
        <FormSectionTitle title="BVN Verification" className={'max-sm:text-2xl max-lg:text-center'} />
        <div className="max-lg:mx-auto w-fit">
          <TextInputWithLabel
            id="bvn2"
            label="Bank Verification Number"
            type="number"
          />          
        </div>

      </div>

      {/* Company Registration Documents */}
      <div className="mt-7">
        <FormSectionTitle
          title="Company Registration Documents"
          className={'max-sm:text-2xl max-lg:text-center'}
        />
        <div className="grid gap-y-6 max-sm:justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {registrationDocs.map((doc) => (
            <SelectWithLabel
              key={doc.id}
              id={doc.id}
              label={doc.label}
              options={doc.options}
              placeholder={`Select ${doc.label}`}
            />
          ))}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center mt-8 gap-6">
        <div className="w-full">
          <TandC />
        </div>
        <div className="w-full lg:w-1/2">
          <Button buttonName="Submit" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileForm;
