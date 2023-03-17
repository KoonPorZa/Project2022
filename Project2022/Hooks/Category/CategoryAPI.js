import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const CategoryAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const baseUrl = 'http://192.168.152.249:8000';
      const url = `${baseUrl}/category/allcategory`;
      const response = await axios.get(url);
      const result = response.data;
      console.log(result);
      setData(result);
      console.log('[Success]')
    } catch (error) {
      console.log('[Error] : ' + error);
    }
  };
  return {data};
};
