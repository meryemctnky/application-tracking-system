import axios from 'axios';

export const getUsers = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/applications.json`);
    return res.data;
  } catch (error) {
    throw new Error(`Error getting users: ${error}`);
  }
};
