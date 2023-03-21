import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card, ToggleButton, Appbar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Rating} from 'react-native-ratings';

// Hook
import {CourseAPI} from './../../Hooks/Course/CourseAPI';
import {GetFavorite} from './../../Hooks/GetFavorite';
import { SetFavorite } from '../../Hooks/SetFavorite';
import {useGetFavCourseAPI} from '../../Hooks/useGetFavCourseAPI'
import {GetIdUser} from '../../Hooks/GetIdUser';
import { useCreateFavorite } from './../../Hooks/useCreateFavorite';

const FavoriteScreen = () => {
  const {data} = CourseAPI();
  const {handleSetFavorite, fav, handleGetFavorite} = SetFavorite()
  const {FavoriteList, getFavoriteLists} = useGetFavCourseAPI()
  const {idUser} = GetIdUser();
  const {addFavorite} = useCreateFavorite()

  const navigation = useNavigation();
  const [status, setStatus] = useState('checked');
  const [icon, setIcon] = useState('heart');

  const onButtonToggle = async (id_document) => {
    console.log(id_document)
    let favorite = [...FavoriteList.map((item, index)=> item.id_document)]
    console.log('data > ',favorite)
    if(favorite.some((item) => item === id_document)) {
      favorite = favorite.filter((item) => item !== id_document)
      console.log('del > ', id_document);
      addFavorite(favorite, idUser)
    } 
    getFavoriteLists()
    console.log('data 2 >', favorite)
    console.log('FavoriteList > ',FavoriteList.map((item, index)=> item.id_document))
  };

  const onCardPress = () => {
    // navigation.navigate('DetailCourse');
  };

  const refreshPress = () => {
    // handleGetFavorite()
    getFavoriteLists()
    console.log('FavoriteList > ',FavoriteList.map((item, index)=> item.id_document))
    
  }

  const newData = data.filter(item => fav?.includes(item.id_document));

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
        <Appbar.Content title="รายการโปรด" />
        <Appbar.Action icon="reload" onPress={refreshPress} />
      </Appbar.Header>

      <ScrollView
        style={{
          height: '100%',
        }}>
        {/* Card */}
        {FavoriteList.length > 0 ? (
          FavoriteList.map((item, index) => {
            if (item.approval == true) {
              return (
                <React.Fragment key={index}>
                  {/* {console.log(item.title)}
              <Text style={{color: 'black'}}>{item.title}</Text> */}

                  <Card style={styles.card} onPress={onCardPress}>
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
                        icon={icon}
                        status={status}
                        onPress={()=>onButtonToggle(item.id_document)}
                      />
                    </View>
                  </Card>
                </React.Fragment>
              );
            }
          })
        ) : (
          <View style={styles.view}>
            <Text style={styles.text}>คุณไม่มีคอร์สที่ถูกใจ</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;

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
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
});
