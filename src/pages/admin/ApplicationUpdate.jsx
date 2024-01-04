import React from 'react';
import { useNavigate, useLoaderData, Form, redirect } from 'react-router-dom';
import axios from 'axios';

function ApplicationUpdate() {
  const application = useLoaderData();
  const navigate = useNavigate();

  return (
    <main className='bg-[#f6f9ff] dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16  flex flex-col lg:flex-row items-center justify-center'>
        <div className='w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Başvuru Düzenle</h2>
          <Form method='patch'>
            <div className='mb-3'>
              <label htmlFor='firstName' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Ad
              </label>
              <input
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                id='firstName'
                name='firstName'
                type='text'
                defaultValue={application ? application[0].firstName : ''}
                readOnly
              />
            </div>
            <div className='mb-3'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='lastName'>
                Soyad
              </label>
              <input
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                id='lastName'
                name='lastName'
                type='text'
                defaultValue={application ? application[0].lastName : ''}
                readOnly
              />
            </div>
            <div className='mb-3'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='status'>
                Başvuru Durumu
              </label>
              <select
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                id='status'
                name='status'
                defaultValue={application ? application[0].status : ''}
              >
                <option value='active'>Onaylandı</option>
                <option value='inactive'>Onay Bekliyor</option>
                <option value='offline'>Reddedildi</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='reply'>
                Başvuru Yanıt
              </label>
              <textarea
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
                id='reply'
                name='reply'
                defaultValue={application ? application[0].reply : ''}
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='px-4 py-2 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
                type='submit'
              >
                Kaydet
              </button>
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={() => navigate('/admin/basvuru-listesi')}
              >
                İptal
              </button>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default ApplicationUpdate;

export async function loader({ request, params }) {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/applications.json?orderBy="applicationNo"&equalTo="${params.basvuruNo}"`
  );

  if (response.status === 200) {
    if (Object.keys(response.data).length === 0) {
      console.log(
        { message: 'Could not fetch details for selected application.' },
        {
          status: 500,
        }
      );
    } else {
      return Object.values(response.data);
    }
  }
}

export async function action({ request, params }) {
  const data = await request.formData();

  const updatedData = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    status: data.get('status'),
    reply: data.get('reply'),
  };
  console.log('updatedData', updatedData);

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/applications.json?orderBy="applicationNo"&equalTo="${params.basvuruNo}"`
    );

    const key = await Object.keys(response.data)[0];

    if (key) {
      const updateResponse = await axios.patch(`${process.env.REACT_APP_BASE_URL}/applications/${key}.json`, updatedData);
    } else {
      console.log('Kayıt bulunamadı');
    }
  } catch (err) {
    console.log('Error: ', err.response ? err.response.data : err.message);
  }

  return redirect('/admin/basvuru-listesi');
}
