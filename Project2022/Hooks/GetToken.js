import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetToken = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    handleGetToken();
  }, []);
  const handleGetToken = async () => {
    // await AsyncStorage.setItem('AccessToken', '');
    try {
      const dataToken = await AsyncStorage.getItem('AccessToken');
      setToken(dataToken);
    } catch (error) {
      console.log(error);
    }
  };
  return {token};
};
