import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { loginSchema } from '../constants/loginSchema';

function Register() {
  const navigate = useNavigate();
  const { createUser } = useAuth();

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await createUser(data.email, data.password);
      navigate('/admin');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <main className='bg-[#f6f9ff] dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16  flex flex-col lg:flex-row items-center justify-center'>
        <div className='w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Üye Ol</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder='name@company.com'
                {...register('email')}
                onBlur={() => trigger('email')}
              />
              {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Parola
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                {...register('password')}
                onBlur={() => trigger('password')}
              />
              {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
            </div>
            <button
              type='submit'
              className='w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
            >
              Üye Ol
            </button>
            <div className='text-sm font-medium text-gray-900 dark:text-white mt-3'>
              Zaten üye misin?{' '}
              <Link to='/admin' className='text-indigo-600 hover:underline dark:text-indigo-500'>
                Giriş Yap
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
