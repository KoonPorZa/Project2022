import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {Card, ToggleButton, Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import {CourseAPI} from './../../Hooks/Course/CourseAPI';
const QueueScreen = () => {

  const navigation = useNavigation();

  const [status, setStatus] = React.useState('unchecked');
  const [icon, setIcon] = React.useState('heart-outline');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setIcon(status === 'checked' ? 'heart-outline' : 'heart');
  };
  const {data} = CourseAPI()
  const onCardPress = () => {
    // navigation.navigate('QuizScreen');
    alert('Queue')
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
        <Appbar.Content title="รายการเข้าคิว" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView
        style={{
          height: '100%',
        }}>
        {/* Card */}
        <Card style={styles.card} onPress={onCardPress}>
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/710'}}
          />
          <Card.Title title={"cardTitle"} subtitle={"cardSubtitle"} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating imageSize={12} startingValue={5} readonly />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                กำลังเข้าคิว
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
        {data.map((item, index) => {
          if (item.approval == true) {
            console.log('Queue Fetch')
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
                        กำลังเข้าคิว
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

export default QueueScreen;

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
