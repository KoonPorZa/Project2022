import axios from 'axios';

export const useCreateFavorite = () => {
  const baseUrl = 'http://192.168.152.48:8000';
  const addFavorite = async (params, idUser) => {
    console.log('idUser : ', idUser);
    console.log('params : ', params);
    try {
      const url = `${baseUrl}/user/addfavorite/${idUser}`;
      await axios.put(url, params);
    } catch (err) {
      console.log(err);
    }
  };
  return {addFavorite};
};
