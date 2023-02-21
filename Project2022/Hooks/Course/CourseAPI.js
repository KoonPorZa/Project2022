import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CourseAPI = () => {
  const [data, setData] = useState([]);
  const baseUrl = 'http://192.168.170.131:8000';
  const getAPI = async () => {
    try {
      const url = `${baseUrl}/course/getallcourse`;
      const response = await axios.get(url);
      const result = response.data;
      // console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getAPIsdsdsdsd = async () => {
  //   const baseUrl = 'http://localhost:8000/course/getallcourse';
  //   axios.defaults.withCredentials = true;
  //   const datatest = await axios.get(baseUrl);
  //   const result = datatest.data;
  //   console.log(result);
  //   setData(result);
  // };

  return {data};
};

export default CourseAPI;
