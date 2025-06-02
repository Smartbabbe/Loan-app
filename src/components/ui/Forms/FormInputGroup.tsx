import React from 'react';
import TextInputWithLabel from './TextInputWithLabel';

const FormInputGroup = ({
  fields,
}: {
  fields: { id: string | number; label: string; type: string; order?: number; }[];
}) => (
  <>
    {fields.map((field, idx) => (
      <div key={idx} className={`order-${field.order ?? 1}`}>
        <TextInputWithLabel
          id={String(field.id)}
          label={field.label}
          type={field.type}
        />
      </div>
    ))}
  </>
);

export default FormInputGroup;
