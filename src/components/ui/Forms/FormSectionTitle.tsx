import React from 'react'

const FormSectionTitle = ({title, className}: {title: string, className: string}) => {
  return (
    <div>
        <p className={`text-2xl font-bold mb-4 ${className}`}>{title}</p>
    </div>
  )
}

export default FormSectionTitle