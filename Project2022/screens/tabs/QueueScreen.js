import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {Card, ToggleButton, Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import {CourseAPI} from './../../Hooks/Course/CourseAPI';
import {GetCourseJoin} from '../../Hooks/GetCourseJoin';
import {JoinCourseAPI} from './../../Hooks/Course/JoinCourseAPI';
import { GetIdUser } from '../../Hooks/GetIdUser';

const QueueScreen = () => {
  const {data} = CourseAPI();
  const {courseJoin} = GetCourseJoin();
  const {joinid} = JoinCourseAPI();

  const navigation = useNavigation();

  const onCardPress = course_id => {
    const detailcourse = data.find(
      (item, index) => item.id_document === course_id,
    );
    navigation.navigate('DetailQueue', {detail: detailcourse});
    
  };

  // console.log(joinid)

  // const newData = data.filter((item) => item.approval === true)
  // const newData = joinid?.filter((item) => item.approval === false)
  const {idUser} = GetIdUser()
  const refreshPress = () => {
    
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
        <Appbar.Action icon="reload" onPress={()=>refreshPress} />
      </Appbar.Header>
      <ScrollView
        style={{
          height: '100%',
        }}>
        {/* Card */}
        {joinid && joinid.length > 0 ? (
          joinid.map((item, index) => {
            if (item.approval == false) {
              return (
                <React.Fragment key={index}>
                  <Card
                    style={styles.card}
                    onPress={() => onCardPress(item.course_id)}>
                    <Card.Cover
                      style={styles.card_cover}
                      source={{uri: `${item.image_course}`}}
                    />
                    <View
                      style={{
                        marginLeft: 15,
                        marginTop: 10,
                        marginBottom: -12,
                      }}>
                      <Text
                        style={[
                          styles.text,
                          {color: '#9382FF', fontWeight: 'bold'},
                        ]}
                        variant="bodyMedium">
                        {`${data
                          .find((params, index) => params.id_document === item.course_id)
                          .course_status.map((i, index) => {
                            return index !== 0 ? ' ' + i.label : i.label;
                          })}`}
                      </Text>
                    </View>
                    <Card.Title
                      title={`${item.courseName}`}
                      subtitle={'หมวดหมู่ ' + `${item.category_title}`}
                    />
                    <View style={styles.container}>
                      <Card.Content style={styles.content}>
                        {/* <Rating imageSize={12} startingValue={5} readonly /> */}
                        <Text
                          style={[styles.text, {marginTop: 5}]}
                          variant="bodyMedium">
                          เข้าคิวแล้ว
                        </Text>
                      </Card.Content>
                      {/* Heart Icon */}
                      {/* <ToggleButton
                      style={{marginRight: 10}}
                      icon={icon}
                      status={status}
                      onPress={onButtonToggle}
                    /> */}
                    </View>
                  </Card>
                </React.Fragment>
              );
            }
          })
        ) : (
          <View style={styles.view}>
            <Text style={styles.text}>คุณไม่มีคอร์สที่เข้าคิว</Text>
          </View>
        )}
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
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
