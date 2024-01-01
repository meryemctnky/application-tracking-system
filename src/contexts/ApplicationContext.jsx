import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { generateShortUniqueId } from '../helpers/generateShortUniqueId';

export const ApplicationContext = createContext();

export const ApplicationFormProvider = ({ children }) => {
  const [applicationData, setApplicationData] = useState();
  const navigate = useNavigate();

  const sendApplication = async (data) => {
    const applicationNo = generateShortUniqueId(8);
    const status = 'inactive';
    const reply = '';

    const formData = {
      ...data,
      applicationNo,
      status,
      reply,
    };
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/applications.json`, formData);

      if (response.status === 200) {
        setApplicationData(formData);
        navigate('/basvuru-basarili');
      }
    } catch (error) {
      console.error('An error occurred while sending the application: ', error);
    }
  };

  const values = {
    applicationData,
    setApplicationData,
    sendApplication,
  };

  return <ApplicationContext.Provider value={values}>{children}</ApplicationContext.Provider>;
};

export const useApplication = () => useContext(ApplicationContext);
