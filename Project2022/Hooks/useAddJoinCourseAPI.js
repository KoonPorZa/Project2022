import axios from 'axios';

export const useAddJoinCourseAPI = () => {
  const baseUrl = 'http://192.168.152.48:8000';
  const addJoinCourse = async (params, idUser) => {
    console.log('idUser : ', idUser);
    console.log('params : ', params);
    try {
      const url = `${baseUrl}/user/addjoincourse/${idUser}`;
      await axios.put(url, params);
      console.log('Add Join Course : ',params)
    } catch (err) {
      console.log(err);
    }
  };
  return {addJoinCourse};
};
