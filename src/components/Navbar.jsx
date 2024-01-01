import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import ThemeSwitcher from './ThemeSwitcher';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    if (isLoggedIn) {
      try {
        await logout();
        navigate('/');
      } catch (e) {
        console.log(e.message);
      }
    } else {
      navigate('/admin');
    }
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={logo} className='h-8' alt='Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>AppTrack</span>
        </Link>
        <button
          onClick={toggleMenu}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
        <div className={`${!isMenuOpen ? 'hidden' : ''} w-full md:block md:w-auto`}>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {isLoggedIn ? (
              <li>
                <NavLink
                  to='/admin/basvuru-listesi'
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 bg-transparent text-indigo-800 md:p-0 dark:text-white md:dark:text-indigo-500'
                      : 'block py-2 px-3 bg-transparent text-gray-900 md:p-0 dark:text-white md:dark:text-indigo-500'
                  }
                >
                  Başvuru Listesi
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to='/'
                    className={({
                      isActive, // isActive durumunu alın
                    }) =>
                      isActive
                        ? 'block py-2 px-3 bg-transparent text-indigo-800 md:p-0 dark:text-white md:dark:text-indigo-500'
                        : 'block py-2 px-3 bg-transparent text-gray-900 md:p-0 dark:text-white md:dark:text-indigo-500'
                    }
                    end
                  >
                    Başvuru Yap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/basvuru-sorgula'
                    className={({
                      isActive, // isActive durumunu alın
                    }) =>
                      isActive
                        ? 'block py-2 px-3 bg-transparent text-indigo-800 md:p-0 dark:text-white md:dark:text-indigo-500'
                        : 'block py-2 px-3 bg-transparent text-gray-900 md:p-0 dark:text-white md:dark:text-indigo-500'
                    }
                  >
                    Başvuru Sorgula
                  </NavLink>
                </li>
              </>
            )}

            <li className='px-3 my-2 md:px-0 md:my-0'>
              <div
                className='inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:cursor-pointer hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900'
                onClick={handleLogout}
              >
                {isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}
              </div>
            </li>
            <li className='px-3 md:px-0 md:my-0'>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
