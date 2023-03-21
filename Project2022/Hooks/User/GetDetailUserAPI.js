import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { GetDetailUser } from '../GetDetailUser';

export const GetDetailUserAPI = () => {
  const {idUser} = GetDetailUser()

  const [state, setState] = useState({
    email: null,
    password: null,
    confirmPassword: null,
    firstName: '',
    lastName: '',
    job: '',
    birthday: '',
    province: null,
    amphure: null,
    tambon: null,
    zipCode: null,
    agency: '',
    status: null,
    about: '',
    image_rul: '',
    id_verify: '',
    address: '',
  });

  useEffect(() => {
    if (idUser) {
      getAPI();
    }
  }, [idUser]);

  const getAPI = async () => {
    try {
      const baseUrl = 'http://192.168.152.48:8000';
      const url = `${baseUrl}/user/getdetailuser/${idUser}`;
      const response = await axios.get(url);
      const result = response.data;
      setState(result);
      console.log('Detail User > ',result)
      console.log('[Success]');
    } catch (error) {
      console.log('[Error] : ' + error);
    }
  };

  return {state};
};
