import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetIdUser = () => {
  const [idUser, setIdUser] = useState();
  useEffect(() => {
    GetAsyncStorage();
  }, []);
  const GetAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('idUser');
      setIdUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  return {idUser};
};
