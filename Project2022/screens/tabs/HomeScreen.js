import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Card,
  ToggleButton,
  Searchbar,
  IconButton,
  Appbar,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Rating} from 'react-native-ratings';

// Hook
import {CourseAPI} from './../../Hooks/Course/CourseAPI';
import {GetFavorite} from './../../Hooks/GetFavorite';
import {SetFavorite} from '../../Hooks/SetFavorite';
import {GetToken} from '../../Hooks/GetToken';
import {GetIdUser} from '../../Hooks/GetIdUser';
import { useCreateFavorite } from './../../Hooks/useCreateFavorite';
import {useGetFavCourseAPI} from '../../Hooks/useGetFavCourseAPI'

const HomeScreen = () => {
  const {token} = GetToken();
  const {idUser} = GetIdUser();
  const {addFavorite} = useCreateFavorite()
  const {FavoriteList, getFavoriteLists} = useGetFavCourseAPI()
  const [Favlist, SetFavlist] = useState()

  useEffect(()=> {
    SetFavlist(FavoriteList.map((item,index)=> item.id_document))
  },[FavoriteList])

  const navigation = useNavigation();
  const {handleSetFavorite, fav, handleGetFavorite} = SetFavorite();
  const onButtonToggle = id_document => {
    if (token !== null) {
      let favorite = [...FavoriteList.map((item, index)=> item.id_document)];
      console.log('data > ', favorite);
      if (favorite.some(item => item === id_document)) {
        favorite = favorite.filter(item => item !== id_document);
        console.log('del > ', id_document);
      } else {
        favorite.push(id_document);
        console.log('add > ', id_document);
      }
      console.log('data 2 >', favorite);
      addFavorite(favorite, idUser)
      getFavoriteLists()
    } else {
      alert('กรุณาเข้าสู่ระบบ');
    }
    
  };

  const onCardPress = id => {
    const detailcourse = data.find((item, index) => item.id_document === id);
    navigation.navigate('DetailCourse', {detail: detailcourse});
  };

  const {data} = CourseAPI();

  const onChangeSearch = () => {};
  const onSearchPress = () => {
    alert('Search');
  };
  const onDotsVerticalPress = () => {
    navigation.navigate('Category');
  };
  const refreshPress = () => {
    getFavoriteLists()
    console.log('FavoriteList > ',Favlist)
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* header */}
      <Appbar.Header
        elevated={false}
        style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.Content title="แนะนำคอร์ส" />
        <Appbar.Action icon="magnify" onPress={onSearchPress} />
        <Appbar.Action icon="reload" onPress={refreshPress} />
        <Appbar.Action icon="menu" onPress={onDotsVerticalPress} />
      </Appbar.Header>

      <ScrollView
        style={{
          height: '100%',
        }}>
        {/* Search Bar */}
        {/* <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Searchbar
            placeholder="ค้นหา"
            onChangeText={setSearch}
            value={search}
            elevation={0}
            style={{
              borderColor: '#5C51A4',
              borderWidth: 1,
              borderRadius: 50,
              width: '90%',
              marginBottom: 5,
            }}
          />
        </View> */}

        {/* Card */}
        {data.map((item, index) => {
          if (item.approval == true) {
            return (
              <React.Fragment key={index}>
                <Card
                  style={styles.card}
                  onPress={() => onCardPress(item.id_document)}>
                  <Card.Cover
                    style={styles.card_cover}
                    source={{uri: `${item.image}`}}
                  />
                  <View style={{marginLeft: 15, marginTop: 10, marginBottom: -12}}>
                    <Text
                      style={[styles.text, {color: '#9382FF', fontWeight: 'bold'}]}
                      variant="bodyMedium">
                      {`${item.course_status?.map((params, index)=> {
                        return (index !== 0 ? ' '+params.label : params.label)
                      })}`}
                    </Text>
                  </View>
                  <Card.Title
                    // title={`${item.title}`}
                    title={`${item.id_document}`}
                    subtitle={'โดย ' + `${item.create_byName}`}
                  />
                  <View style={styles.container}>
                    <Card.Content style={styles.content}>
                      {/* <Rating imageSize={12} startingValue={5} readonly /> */}
                      <Text
                        style={[styles.text, {marginTop: 5}]}
                        variant="bodyMedium">
                        {`${item.pricing}`} THB
                      </Text>
                    </Card.Content>
                    {/* Heart Icon */}
                    <ToggleButton
                      style={{marginRight: 10}}
                      icon={
                        Favlist?.some(icon => icon === item.id_document)
                          ? 'heart'
                          : 'heart-outline'
                      }
                      status={'unchecked'}
                      onPress={() => onButtonToggle(item.id_document)}
                    />
                  </View>
                </Card>
              </React.Fragment>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  content: {
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
