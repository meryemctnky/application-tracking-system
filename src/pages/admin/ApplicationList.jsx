import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ApplicationList() {
  const applications = useLoaderData();
  const applicationsArray = Object.values(applications);
  const navigate = useNavigate();

  const updateApplication = (applicationNo) => {
    navigate(`/admin/basvuru/${applicationNo}`);
  };

  return (
    <section className='max-w-screen-xl mx-auto min-h-screen flex flex-wrap items-start justify-start px-5 py-5'>
      <div className='w-full overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Başvuru No
              </th>
              <th scope='col' className='px-6 py-3'>
                Ad
              </th>
              <th scope='col' className='px-6 py-3'>
                Soyad
              </th>
              <th scope='col' className='px-6 py-3'>
                Durum
              </th>
              <th scope='col' className='px-6 py-3'>
                Tarih
              </th>
              <th scope='col' className='px-6 py-3'>
                Başvuru Yanıt
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Görüntüle</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {applicationsArray.map((application) => (
              <tr
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                key={application.applicationNo}
              >
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {application.applicationNo}
                </th>
                <td className='px-6 py-4'>{application.firstName}</td>
                <td className='px-6 py-4'>{application.lastName}</td>
                <td className='px-6 py-4'>
                  {application.status === 'active' && (
                    <span className='uppercase bg-green-400 text-green-700 p-1 md:p-2 rounded-lg font-medium'>Onaylandı</span>
                  )}
                  {application.status === 'inactive' && (
                    <span className='uppercase bg-yellow-400 text-yellow-700 p-1 md:p-2 rounded-lg font-medium'>Onay Bekliyor</span>
                  )}
                  {application.status === 'offline' && (
                    <span className='uppercase bg-red-400 text-red-700 p-1 md:p-2 rounded-lg font-medium'>Reddedildi</span>
                  )}
                </td>
                <td className='px-6 py-4'>{application.createdAt}</td>
                <td className='px-6 py-4'>{application.reply}</td>
                <td className='px-6 py-4 text-right'>
                  <div
                    className='font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer'
                    onClick={() => updateApplication(application.applicationNo)}
                  >
                    Görüntüle
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ApplicationList;

export async function loader() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/applications.json`);

    const resData = response.data;
    return resData;
  } catch (error) {
    console.error('Fetching events failed.', error);
  }
}
