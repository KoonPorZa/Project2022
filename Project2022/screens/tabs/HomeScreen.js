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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState('unchecked');
  const [icon, setIcon] = useState('heart-outline');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setIcon(status === 'checked' ? 'heart-outline' : 'heart');
  };

  const onCardPress = () => {
    navigation.navigate('DetailCourse');
  };

  const {data} = CourseAPI();

  const onChangeSearch = () => {};
  const onSearchPress = () => {};
  const onDotsVerticalPress = () => {
    navigation.navigate('Category')
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* header */}
      {/* <View
        style={{
          width: '100%',
          height: 60,
          borderBottomWidth: 0.3,
          borderColor: '#5C51A4',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          หน้าหลัก
        </Text>
        <View style={{}}>
          <IconButton icon="camera" size={20} />
        </View>
      </View> */}

      <Appbar.Header
        elevated={false}
        style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.Content title="แนะนำหลักสูตร" />
        <Appbar.Action icon="magnify" onPress={onSearchPress} />
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
            console.log('Home Fetch')
            return (
              <React.Fragment key={index}>
                {/* {console.log(item.title)}
              <Text style={{color: 'black'}}>{item.title}</Text> */}

                <Card style={styles.card} onPress={onCardPress}>
                  <Card.Cover
                    style={styles.card_cover}
                    source={{uri: `${item.image}`}}
                  />
                  <Card.Title
                    title={`${item.title}`}
                    subtitle={'โดย ' + `${item.create_byName}`}
                  />
                  <View style={styles.container}>
                    <Card.Content style={styles.content}>
                      <Rating imageSize={12} startingValue={5} readonly />
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
                      onPress={onButtonToggle}
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
