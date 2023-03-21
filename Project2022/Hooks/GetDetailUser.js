import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetDetailUser = () => {
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    GetAsyncStorage();
  }, []);
  const GetAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('userDetail');
      setUserDetail(data !== null ? JSON.parse(data) : null);
      console.log(typeof(JSON.parse(data)))
    } catch (error) {
      console.log(error);
    }
  };
  return {userDetail};
};
