import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <section className='bg-center bg-cover bg-no-repeat bg-hero-pattern bg-gray-700 bg-blend-multiply'>
      <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
          Küresel potansiyeli destekliyoruz
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
          Dünya genelinde, farklı alanlardaki potansiyelleri belirleyip, yenilikçi projeler aracılığıyla geleceğe güçlü ve sürdürülebilir
          yatırımlar yapıyoruz. Amacımız, global ölçekte etkili bir ilerleme sağlamak.
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
          <Link
            activeClass='active'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900'
            to='applicationForm'
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Başvuru Yap
            <svg
              className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
            </svg>
          </Link>
          <a
            href='https://www.patika.dev/bootcamp/fimple-react-bootcamp'
            target='_blank'
            className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
          >
            Daha Fazla Bilgi
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
