import React from 'react';
import formImg from '../../assets/formImg.svg';
import { ApplicationForm } from '../../components';

function CreateApplication() {
  return (
    <section className='min-w-screen min-h-screen shadow-sm rounded flex items-center justify-center px-5 py-5'>
      <div className='bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden dark:bg-gray-800 ' style={{ maxWidth: '1000px' }}>
        <div className='md:flex w-full'>
          <div className='hidden md:flex md:items-center md:justify-center w-1/2 bg-indigo-500 py-8 px-8'>
            <img className='' src={formImg} alt='' />
          </div>
          <div className='w-full h-full md:w-1/2 py-8 px-5 md:px-8'>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateApplication;
