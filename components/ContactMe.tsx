import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rushilayaan@gmail.com?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className="absolute top-24 uppercase text-gray-300 tracking-[20px] text-2xl">
        Contact me
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-center font-semibold text-4xl'>
          Wanna get in touch?{" "}
          <span className='underline decoration-orange-300/70'>Lets Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon 
            className='text-orange-400 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+1 (412) 969-3567</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon
            className='text-orange-400 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>rushilayaan@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon 
            className='text-orange-400 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Pittsburgh, PA</p>
          </div>
        </div>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-fit mx-auto'>

          <div className='flex space-x-2'>
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register('subject')} placeholder="Subject" className="contactInput" type='text' />

          <textarea {...register('message')} placeholder="Message" className="contactInput" />

          <button
          type='submit'
          className='bg-orange-500 py-5 px-10 rounded-md text-white font-bold text-lg md:text-xl'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
};

export default ContactMe;
