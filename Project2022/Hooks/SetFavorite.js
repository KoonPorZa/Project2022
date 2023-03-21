import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetFavorite } from './GetFavorite';

export const SetFavorite = () => {
    const [state, setState] = useState()

  useEffect(() => {
    handleSetFavorite();
    handleGetFavorite()
  }, [state]);
  const handleSetFavorite = async (item) => {
    if (item) {
        await AsyncStorage.setItem('userFavorite', JSON.stringify(item), (error) => {
          if(error) {
            console.log("an error")
            throw error
          }
          console.log("success")
        }).catch((error) => {
          console.log("error is : ",error)
        })
        setState(item)
      }
  };
  const [fav, setFav] = useState();
  const handleGetFavorite = async () => {
    try {
      const data = await AsyncStorage.getItem('userFavorite');
      setFav(data !== null ? JSON.parse(data) : null);
    } catch (error) {
      console.log(error);
    }
    setState(null)
  };
  return {handleSetFavorite, fav, handleGetFavorite};
};
