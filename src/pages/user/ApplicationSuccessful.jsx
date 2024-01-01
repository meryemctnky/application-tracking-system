import React from 'react';
import { useApplication } from '../../contexts/ApplicationContext';

function ApplicationSuccessful() {
  const { applicationData } = useApplication();
  console.log('applicationData', applicationData);

  return (
    <main className='bg-[#f6f9ff] dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16  flex flex-col lg:flex-row items-center justify-center '>
        <div className='w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <h2 className='text-2xl font-bold text-indigo-700 dark:text-white'>Başvurunuz Alınmıştır!</h2>
          <p className='text-lg mb-4 text-gray-700 dark:text-gray-400'>Başvurunuzla ilgili detaylar aşağıda belirtilmiştir:</p>
          <div className='mb-4 text-lg dark:text-gray-400'>
            <strong className='font-semibold dark:text-white'>Ad: </strong>
            {applicationData.firstName}
            <br />
            <strong className='font-semibold dark:text-white'>Soyad: </strong>
            {applicationData.lastName}
            <br />
          </div>
          <p className='text-lg font-semibold dark:text-white'>Başvuru Kodunuz:</p>
          <div className='rounded-lg text-center'>
            <strong className='text-3xl text-indigo-700 font-bold'>{applicationData.applicationNo}</strong>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ApplicationSuccessful;
