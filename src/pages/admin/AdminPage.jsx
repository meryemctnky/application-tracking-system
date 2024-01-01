import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginSchema } from '../../constants/loginSchema';

function AdminPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

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
      const response = await getUser({
        email: data.email,
        password: data.password,
      });
      login(response);
      navigate('/admin/basvuru-listesi');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main class='bg-[#f6f9ff] dark:bg-gray-900'>
      <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16  flex flex-col lg:flex-row items-center justify-center'>
        <div class='w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <h2 class='text-2xl font-bold text-gray-900 dark:text-white'>Giriş Yap</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label for='username' class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Kullanıcı Adı
              </label>
              <input
                type='text'
                name='username'
                id='username'
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
                  errors.username ? 'border-red-500' : ''
                }`}
                placeholder='name@company.com'
                {...register('username')}
                onBlur={() => trigger('username')}
              />
              {errors.username && <p className='text-red-500 text-xs italic'>{errors.username.message}</p>}
            </div>
            <div className='mb-3'>
              <label for='password' class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
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
              class='w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
            >
              Giriş Yap
            </button>
            <div class='text-sm font-medium text-gray-900 dark:text-white mt-3'>
              Üye değil misin? <a class='text-indigo-600 hover:underline dark:text-indigo-500'>Üye Ol</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AdminPage;
