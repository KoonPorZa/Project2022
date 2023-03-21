import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetFavorite = () => {
  const [fav, setFav] = useState();
  useEffect(() => {
    handleGetFavorite();
  }, []);
  const handleGetFavorite = async () => {
    try {
      const data = await AsyncStorage.getItem('userFavorite');
      setFav(data !== null ? JSON.parse(data) : null);
    } catch (error) {
      console.log(error);
    }
  };
  return {fav};
};
