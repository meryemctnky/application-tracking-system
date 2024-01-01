import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorPage({ hasError }) {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-red-500 mb-4'>404 Not Found</h1>
        <p className='text-gray-600 mb-8 dark:text-white'>
          {hasError ? 'Böyle bir başvuru bulunamadı lütfen başaru kodunuzu kontrol edin.' : 'Böyle bir sayfa bulunamadı.'}
        </p>
        <NavLink className='px-4 py-2 bg-red-500 text-white rounded shadow' to={`${hasError ? '/basvuru-sorgula' : '/'}`}>
          {hasError ? 'Başvuru Sorgula' : 'Ana Sayfa'}
        </NavLink>
      </div>
    </>
  );
}

export default ErrorPage;
