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
  const businessTypes = ['Sole Proprietorship', 'Partnership', 'Limited Liability', 'Corporation'];

  const directorFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'phone', label: 'Phone Number', type: 'number' },
    { id: 'email', label: 'Email Address', type: 'email' },
  ];

  const relationshipOptions = ['Director', 'Shareholder'];
  const govIdTypes = ['BVN', 'NIN', `Driver's License`, 'International Passport', `Voter's Card`];

  const registrationDocs = [
    { id: 'uploadCoi', label: 'Upload COI', options: ['PDF', 'Image'] },
    { id: 'uploadMemart', label: 'Upload Memart', options: ['PDF', 'Image'] },
    { id: 'others', label: 'Others', options: ['PDF', 'Image'] },
  ];

  return (
    <div className="bg-white py-4 px-7 mb-7 rounded-lg h-fit w-full">
      {/* Business Details */}
      <div className="w-full">
        <FormSectionTitle title={'Business Details'} className={''} />
        <div className="grid grid-cols-4 gap-x-16">
          <FormInputGroup fields={businessDetailsFields} />
          <SelectWithLabel id="typeOfBusiness" label="Type of Business" options={businessTypes} placeholder="Select business type" />
          <SelectWithLabel id="state" label="State" options={stateOptions} placeholder="Select state" />
        </div>
      </div>

      {/* Director/Shareholder 1 */}
      <div className='mt-7'>
        <FormSectionTitle title={'Director/Shareholder 1'} className={''} />
        <div className="grid grid-cols-4 gap-x-16">
          <SelectWithLabel id="role1" label="Director/Shareholder" options={relationshipOptions} placeholder="Select role" />
          <FormInputGroup fields={directorFields.map(field => ({ ...field, id: `${field.id}1` }))} />
        </div>

        <FormSectionTitle title={'Government-issued ID Verification'} className={''} />
        <div className='grid grid-cols-3 gap-x-12'>
          <SelectWithLabel id="govIdType1" label="Select ID Type" options={govIdTypes} placeholder="Select ID type" />
          <TextInputWithLabel id="uploadId1" label="Upload Government ID" type="file" />
        </div>

        <FormSectionTitle title={'BVN Verification'} className={''} />
        <TextInputWithLabel id="bvn1" label="Bank Verification Number" type="number" />
      </div>

      {/* Director/Shareholder 2 */}
      <div className='mt-7'>
        <FormSectionTitle title={'Director/Shareholder 2'} className={''} />
        <div className="grid grid-cols-4 gap-x-16">
          <SelectWithLabel id="role2" label="Director/Shareholder" options={relationshipOptions} placeholder="Select role" />
          <FormInputGroup fields={directorFields.map(field => ({ ...field, id: `${field.id}2` }))} />
        </div>

        <FormSectionTitle title={'Government-issued ID Verification'} className={''} />
        <div className='grid grid-cols-3 gap-x-12'>
          <SelectWithLabel id="govIdType2" label="Select ID Type" options={govIdTypes} placeholder="Select ID type" />
          <TextInputWithLabel id="uploadId2" label="Upload Government ID" type="file" />
        </div>

        <FormSectionTitle title={'BVN Verification'} className={''} />
        <TextInputWithLabel id="bvn2" label="Bank Verification Number" type="number" />
      </div>

      {/* Company Registration Documents */}
      <div className='mt-7'>
        <FormSectionTitle title={'Company Registration Documents'} className={''} />
        <div className='grid grid-cols-3 gap-x-12'>
          {registrationDocs.map(doc => (
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
      <div className='flex items-center'>
        <div className="w-full mt-5">
            <TandC />
        </div>

        <div className="w-1/2 mt-6">
            <Button buttonName={'Submit'} className="w-1/2" />
        </div>        
      </div>

    </div>
  );
};

export default BusinessProfileForm;
