import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { GetIdUser } from './../GetIdUser';

const baseUrl = 'http://192.168.152.48:8000';

export const CourseAPI = () => {
  const {idUser} = GetIdUser()
  const [data, setData] = useState([]);
  const [detailCourse, setDetailCourse] = useState();

  useEffect(() => {
    getAPI();
  }, []);
  // useEffect(() => {
  //   getDetailCourseAPI()
  // }, [idUser]);

  const getAPI = async () => {
    try {
      const url = `${baseUrl}/course/getallcourse`;
      const response = await axios.get(url);
      const result = response.data;
      setData(result);
      console.log('[Success]');
    } catch (error) {
      console.log('[Error] : ' + error);
    }
  };
  // const getDetailCourseAPI = async () => {
  //   try {
  //     const url = `${baseUrl}/course/getdetailcourse/${idUser}`;
  //     const response = await axios.get(url);
  //     const result = response.data;
  //     setDetailCourse(result);
  //     console.log('[Success]',result);
  //   } catch (error) {
  //     console.log('[Error] : ' + error);
  //   }
  // };
  return {data};
};


