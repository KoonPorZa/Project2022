import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetUserEmail = () => {
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    GetAsyncStorage();
  }, []);
  const GetAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('userEmail');
      setUserEmail(data);
    } catch (error) {
      console.log(error);
    }
  };
  return {userEmail};
};
