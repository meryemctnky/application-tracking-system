import { ApplicationDetailTable } from '../../components';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

function ApplicationDetail() {
  const application = useLoaderData();

  return (
    <>
      <div className='max-w-screen-xl mx-auto min-h-screen px-5 py-5'>
        <h1 className='font-bold text-2xl text-indigo-700 dark:text-white mx-auto mb-4'>Başvuru Bilgileri</h1>
        <section className='flex flex-wrap items-start justify-start'>
          <div className='w-full overflow-x-auto shadow-md sm:rounded-lg'>
            <ApplicationDetailTable application={application} />
          </div>
        </section>
      </div>
    </>
  );
}

export default ApplicationDetail;

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
