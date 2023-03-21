import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GetIdUser} from './GetIdUser';

export const useGetFavCourseAPI = () => {
  const {idUser} = GetIdUser();
  const baseUrl = 'http://192.168.152.48:8000';
  const [FavoriteList, setFavoriteList] = useState([]);
  useEffect(() => {
    getFavoriteLists();
  }, [idUser]);

  const getFavoriteLists = async () => {
    try {
      if (idUser) {
        const url = `${baseUrl}/user/getfavoritefromid/${idUser}`;
        const get_favorite = await axios.get(url);
        const result = get_favorite.data;
        setFavoriteList(
          result.map(e => {
            return {
              ...e,
            };
          }),
        );
      } else {
        console.log('no id');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {FavoriteList, getFavoriteLists};
};
