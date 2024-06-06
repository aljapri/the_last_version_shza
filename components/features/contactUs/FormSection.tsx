import ContactUsForm from '@/components/form/ContactUsForm';
import React from 'react'
import FormTitle from './FormTitle';

export default function FormSection() {
  return (
    <div className="w-full  flex justify-center items-center">
      <section className="bg-gray-900">
        <div className="py-8 lg:py-16 px-4 max-w-screen-md">
          <FormTitle/>
          <ContactUsForm />
        </div>
      </section>
    </div>
  );
}
