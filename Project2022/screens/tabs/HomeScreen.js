import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {
  Card,
  ToggleButton,
  Searchbar,
  IconButton,
  Appbar,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {Rating} from 'react-native-ratings';

const HomeScreen = () => {
  const navigation = useNavigation();

  let cardTitle = 'พัฒนาโมไบล์ด้วย Flutter 3.3.1 (Building 15 Projects)';
  let cardSubtitle = 'โดย ' + 'จักริน นิลพันธ์';

  const [status, setStatus] = useState('unchecked');
  const [icon, setIcon] = useState('heart-outline');

  const [search, setSearch] = useState('');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setIcon(status === 'checked' ? 'heart-outline' : 'heart');
  };

  const onCardPress = () => {
    navigation.navigate('DetailCourse');
  };

  const onChangeSearch = () => {};

  const onSearchPress = () => {};

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

      <Appbar.Header elevated={false} style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.Content title="แนะนำหลักสูตร" />
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
        <Card style={styles.card} onPress={onCardPress}>
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Card.Title title={cardTitle} subtitle={cardSubtitle} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating imageSize={12} startingValue={5} readonly />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                1,500 THB
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

        <Card style={styles.card} onPress={onCardPress}>
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/699'}}
          />
          <Card.Title title={cardTitle} subtitle={cardSubtitle} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating imageSize={12} startingValue={5} readonly />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                2,500 THB
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

        <Card style={styles.card} onPress={onCardPress}>
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Card.Title title={cardTitle} subtitle={cardSubtitle} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating imageSize={12} startingValue={5} readonly />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                1,200 THB
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
