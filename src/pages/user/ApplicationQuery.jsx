import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ApplicationQuery() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleQuery = (e) => {
    e.preventDefault();
    navigate(`/basvuru/${inputValue}`);
  };

  return (
    <main className='bg-[#f6f9ff] flex flex-row items-center dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16'>
        <div className='flex flex-col justify-center'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            We invest in the world’s potential
          </h1>
          <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, dolore. Eligendi distinctio ex error id ullam. Voluptate
            perferendis quae labore dolores reprehenderit?
          </p>
          <a
            href='/https://www.patika.dev/bootcamp/fimple-react-bootcamp'
            className='text-indigo-600 dark:text-indigo-500 hover:underline font-medium text-lg inline-flex items-center'
          >
            Daha fazla bilgi edinin
            <svg
              className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
            </svg>
          </a>
        </div>
        <div>
          <div className='w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800'>
            <h2 className='text-2xl font-bold text-indigo-500 dark:text-white'>Başvuru Sorgula</h2>
            <form className='mt-8 space-y-6' onSubmit={handleQuery}>
              <div>
                <label htmlFor='applicationNo' className='block text-lg font-semibold mb-1 dark:text-gray-400'>
                  Başvuru Kodu:
                </label>
                <input
                  type='text'
                  id='applicationNo'
                  className='border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500'
                  placeholder='Başvuru kodunu girin'
                  onChange={handleInputChange}
                  value={inputValue}
                />
              </div>
              <button
                type='submit'
                className='w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
              >
                Başvuru Sorgula
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ApplicationQuery;
