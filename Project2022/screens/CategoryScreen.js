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
import {CategoryAPI} from './../Hooks/Category/CategoryAPI';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState('unchecked');
  const [icon, setIcon] = useState('heart-outline');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setIcon(status === 'checked' ? 'heart-outline' : 'heart');
  };

  const onCardPress = () => {
    // navigation.navigate('DetailCourse');
    alert('Card Press');
  };
  const onBackPress = () => {
    navigation.navigate('Main');
  };

  const {data} = CategoryAPI();

  const onChangeSearch = () => {};
  const onSearchPress = () => {};
  const onDotsVerticalPress = () => {
    alert('หมวดหมู่');
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
        <Appbar.BackAction onPress={onBackPress} />
        <Appbar.Content title="หมวดหมู่" />
        <Appbar.Action icon="magnify" onPress={onSearchPress} />
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
          console.log('Category Fetch');
          return (
            <React.Fragment key={index}>
              {/* {console.log(item.title)}
              <Text style={{color: 'black'}}>{item.title}</Text> */}

              <Card style={styles.card} onPress={onCardPress}>
                <Card.Title title={`${item.Category_Title}`} />
              </Card>
            </React.Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
});
