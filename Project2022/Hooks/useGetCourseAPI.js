import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {GetIdUser} from './GetIdUser';

export const useGetCourseAPI = () => {
  const baseUrl = 'http://192.168.152.48:8000';
  const {idUser} = GetIdUser();
  const [allJoinCourse, setAllJoinCourse] = useState();
  useEffect(() => {
    getJoinCourse();
  }, [idUser]);

  const getJoinCourse = async () => {
    try {
      if (idUser) {
        const url = `${baseUrl}/user/getjoincoursebyIduser/${idUser}/`;
        const response = await axios.get(url);
        const result = response.data;
        setAllJoinCourse(
          result.map(e => {
            return {
              ...e,
            };
          }),
        );
      } else {
        console.log('no id');
      }
    } catch (error) {
      console.log('[JoinID Error] : ' + error);
    }
  };
  return {allJoinCourse, getJoinCourse};
};
