import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const ProvinceAPI = () => {
  const [data, setData] = useState([]);
  const [province, setProvince] = useState([]);
  const [amphure, setAmphure] = useState([]);
  const [tambon, setTambon] = useState([]);
  const [zipcode, setZipcode] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const baseUrl = 'http://192.168.152.48:8000';
      const url = `${baseUrl}/provice/getapiprovince/`;
      const response = await axios.get(url);
      const result = response.data;
      setData(result);
      setProvince(result.map(item => ({id: item.id, label: item.name_th})));
      // console.log(data)
      console.log('[Success]');
    } catch (error) {
      console.log('[Error] : ' + error);
    }
  };
  const getAmphure = async id => {
    if (data.length > 0) {
      const newdata = data.filter(e => e.id === id)[0];
      setAmphure(
        newdata.amphure.map(item => ({id: item.id, label: item.name_th})),
      );
    } else {
      // alert('wait data');
      const newdata = data.filter(e => e.id === id)[0];
      setAmphure(
        newdata.amphure.map(item => ({id: item.id, label: item.name_th})),
      );
    }
  };

  const getTambon = (pid, aid) => {
    const filterProvince = data.filter(e => e.id === pid)[0];
    const filterAmphure = filterProvince.amphure.filter(e => e.id == aid)[0];
    setTambon(
      filterAmphure.tambon?.map(item => ({
        id: item.id,
        label: item.name_th,
        zipcode: item.zip_code,
      })),
    ); //!เราเอาค่าตำบลนี้ไปใช้ต่อจาก zip_code เลยใช้ zipcode แทน
  };
  const getZipcode = tid => {
    const filltertambon = tambon.filter(e => e.id === tid);
    const fillterzipcode = filltertambon.map(item => ({
      id: item.id,
      label: item.zipcode,
    }));
    setZipcode(fillterzipcode);
  };
  return {
    data,
    province,
    amphure,
    getAmphure,
    tambon,
    getTambon,
    zipcode,
    getZipcode,
    getAPI,
  };
};
