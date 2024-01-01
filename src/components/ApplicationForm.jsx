import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../constants/validationSchema';
import { useApplication } from '../contexts/ApplicationContext';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { sendApplication } = useApplication();
  const handleFormSubmit = async (formData) => {
    const currentDate = new Date();
    formData.createdAt = currentDate.toISOString();

    const imageRef = ref(storage, `images/${formData.firstName}_${formData.lastName}_${currentDate.getTime()}`);

    try {
      const imageFile = document.querySelector('#fileUpload').files[0];
      await uploadBytes(imageRef, imageFile);

      const imageURL = await getDownloadURL(imageRef);
      formData.imageURL = imageURL;

      sendApplication(formData);
    } catch (error) {
      console.error('Görüntü yüklenirken bir hata oluştu:', error);
    }
  };

  return (
    <form id='applicationForm' onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='firstName'>
          Ad
        </label>
        <input
          {...register('firstName')}
          onBlur={() => trigger('firstName')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
            errors.firstName ? 'border-red-500' : ''
          }`}
          id='firstName'
          type='text'
          placeholder='Adınız'
        />
        {errors.firstName && <p className='text-red-500 text-xs italic'>{errors.firstName.message}</p>}
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='firstName'>
          Soyad
        </label>
        <input
          {...register('lastName')}
          onBlur={() => trigger('lastName')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
            errors.lastName ? 'border-red-500' : ''
          }`}
          id='lastName'
          type='text'
          placeholder='Soyadınız'
        />
        {errors.lastName && <p className='text-red-500 text-xs italic'>{errors.lastName.message}</p>}
      </div>
      {/* <!-- Yaş Inputu -->*/}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='age'>
          Yaş
        </label>
        <input
          {...register('age')}
          onBlur={() => trigger('age')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
            errors.age ? 'border-red-500' : ''
          }`}
          id='age'
          type='number'
          placeholder='Yaşınız'
        />
        {errors.age && <p className='text-red-500 text-xs italic'>{errors.age.message}</p>}
      </div>
      {/* <!-- TC Kimlik Numarası Inputu --> */}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='age'>
          TC Kimlik Numarası
        </label>
        <input
          {...register('tc')}
          onBlur={() => trigger('tc')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
            errors.tc ? 'border-red-500' : ''
          }`}
          id='tc'
          type='text'
          placeholder='TC Kimlik Numaranız'
          maxLength={11}
        />
        {errors.tc && <p className='text-red-500 text-xs italic'>{errors.tc.message}</p>}
      </div>
      {/* <!-- Başvuru Nedeni Inputu --> */}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='reason'>
          Başvuru Nedeni
        </label>
        <textarea
          {...register('reason')}
          onBlur={() => trigger('reason')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
            errors.reason ? 'border-red-500' : ''
          }`}
          id='reason'
          placeholder='Başvuru Nedeniniz'
        ></textarea>
        {errors.reason && <p className='text-red-500 text-xs italic'>{errors.reason.message}</p>}
      </div>
      {/* <!-- Adres Bilgisi Inputu --> */}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='address'>
          Adres Bilgisi
        </label>
        <textarea
          {...register('address')}
          onBlur={() => trigger('address')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 ${
            errors.address ? 'border-red-500' : ''
          }`}
          id='address'
          placeholder='Adres Bilgileriniz'
        ></textarea>
        {errors.address && <p className='text-red-500 text-xs italic'>{errors.address.message}</p>}
      </div>
      {/* <!-- Dosya Yükleme Inputu --> */}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor='fileUpload'>
          Fotograflar/Ekler
        </label>
        <div className='flex items-center justify-between'>
          <input
            {...register('file')}
            className='w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='fileUpload'
            type='file'
            accept='image/*'
          />
        </div>
        {errors.file && <p className='text-red-500 text-xs italic'>{errors.file.message}</p>}
      </div>
      <button
        type='submit'
        className='text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
      >
        Gönder
      </button>
    </form>
  );
}

export default ApplicationForm;
