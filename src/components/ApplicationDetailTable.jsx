import React, { useEffect, useState } from 'react';
import { fetchImageURL } from '../helpers/fetchImageURL';

function ApplicationDetailTable({ application }) {
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    if (application) {
      const imagePath = application.map((app) => app.imageURL);
      Promise.all(imagePath.map(fetchImageURL))
        .then((url) => {
          setImageURL(url);
        })
        .catch((error) => {
          console.error('Resim URLleri alınırken bir hata oluştu:', error);
        });
    }
  }, [application]);

  return (
    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
      <tbody>
        {application?.map((app) => (
          <React.Fragment key={app.applicationNo}>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                TC Kimlik Numarası:
              </th>
              <td className='px-6 py-4'>{app.tc}</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Ad:
              </th>
              <td className='px-6 py-4'>{app.firstName}</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Soyad:
              </th>
              <td className='px-6 py-4'>{app.lastName}</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Yaş:
              </th>
              <td className='px-6 py-4'>{app.age}</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Başvuru Nedeni:
              </th>
              <td className='px-6 py-4'>{app.reason}</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Adres:
              </th>
              <td className='px-6 py-4'>{app.address}</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Başvuru Durumu:
              </th>
              <td className='px-6 py-4'>
                {app.status === 'active' && (
                  <span className='uppercase bg-green-400 text-green-700 p-2 rounded-lg font-medium'>Onaylandı</span>
                )}
                {app.status === 'inactive' && (
                  <span className='uppercase bg-yellow-400 text-yellow-700 p-2 rounded-lg font-medium'>Onay Bekliyor</span>
                )}
                {app.status === 'offline' && (
                  <span className='uppercase bg-red-400 text-red-700 p-2 rounded-lg font-medium'>Reddedildi</span>
                )}
              </td>
            </tr>
            {app.reply && (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Başvuru Yanıt:
                </th>
                <td className='px-6 py-4'>{app.reply}</td>
              </tr>
            )}
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Resim:
              </th>
              <td className='px-6 py-4'>
                <img src={imageURL} alt='Image' width={100} height={100} />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default ApplicationDetailTable;
