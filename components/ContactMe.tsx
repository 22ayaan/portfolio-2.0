import React from 'react';

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase text-gray-300 tracking-[20px] text-2xl">
        Contact me
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-center font-semibold text-4xl'>
          Wanna get in touch?{" "}
          <span className='underline decoration-orange-300/70'>Let's Talk.</span>
        </h4>
      </div>
    </div>
  )
};

export default ContactMe;