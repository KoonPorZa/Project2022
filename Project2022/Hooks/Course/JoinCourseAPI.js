import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { GetIdUser } from './../GetIdUser';

const baseUrl = 'http://192.168.152.48:8000';

export const JoinCourseAPI = () => {
    const {idUser} = GetIdUser()
    const [joinid, setJoinId] = useState();

    useEffect(() => {
      getJoinId();
    }, [idUser]);
  
    const getJoinId = async () => {
      try {
        const url = `${baseUrl}/user/getjoincoursebyIduser/${idUser}/`;
        const response = await axios.get(url);
        const result = response.data
        // setJoinId(result.map((item)=> {
        //     return {id: item.course_id}
        // }));
        setJoinId(result)
        console.log('[JoinID Success]');
      } catch (error) {
        console.log('[JoinID Error] : ' + error);
      }
    };

    const addJoinCourse = async (id_document) => {
      try {
        const url = `${baseUrl}/user/addjoincourse/${idUser}/`;
        await axios.put(url, id_document);
        // const result = response.data
        // setJoinId(result.map((item)=> {
        //     return {id: item.course_id}
        // }));
        // setJoinId(result)
        console.log('[Add Join Success]');
      } catch (error) {
        console.log('[Add Join Error] : ' + error);
      }
    }

    return {joinid, getJoinId, addJoinCourse};
  };