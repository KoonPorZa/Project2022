import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetCourseJoin = () => {
  const [courseJoin, setCourseJoin] = useState();
  useEffect(() => {
    GetAsyncStorage();
  }, []);
  const GetAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('userCourseJoin');
      setCourseJoin(data !== null ? JSON.parse(data) : null);
    } catch (error) {
      console.log(error);
    }
  };
  return {courseJoin};
};
