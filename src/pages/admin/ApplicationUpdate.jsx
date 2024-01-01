import React from 'react';
import { useNavigate, useLoaderData, Form, redirect } from 'react-router-dom';
import axios from 'axios';

function ApplicationUpdate() {
  const application = useLoaderData();
  const navigate = useNavigate();

  return (
    <section className='max-w-screen-xl mx-auto min-h-screen flex items-center justify-center'>
      <div className='w-full sm:max-w-md bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-2xl font-bold mb-6'>Başvuru Düzenle</h2>
        <Form method='patch'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
              Ad
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='firstName'
              name='firstName'
              type='text'
              defaultValue={application ? application[0].firstName : ''}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
              Soyad
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='lastName'
              name='lastName'
              type='text'
              defaultValue={application ? application[0].lastName : ''}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>
              Başvuru Durumu
            </label>
            <select
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='status'
              name='status'
              defaultValue={application ? application[0].status : ''}
            >
              <option value='active'>Onaylandı</option>
              <option value='inactive'>Onay Bekliyor</option>
              <option value='offline'>Reddedildi</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='reply'>
              Başvuru Yanıt
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='reply'
              name='reply'
              type='text'
              defaultValue={application ? application[0].reply : ''}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
    </section>
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
