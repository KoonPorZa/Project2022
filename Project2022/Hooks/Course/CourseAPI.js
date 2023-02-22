import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const CourseAPI = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    getAPI()
  }, [])

  const getAPI = async () => {
    try {
      const baseUrl = 'http://192.168.133.173:8000';
      const url = `${baseUrl}/course/getallcourse`;
      const response = await axios.get(url);
      const result = response;
      console.log(result.data);
      console.log('log test');
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {data}
};

