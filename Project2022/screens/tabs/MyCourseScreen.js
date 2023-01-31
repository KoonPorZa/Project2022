import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import {Card, ToggleButton} from 'react-native-paper';

import {Rating} from 'react-native-ratings';

const MyCourseScreen = () => {

  let cardTitle = 'พัฒนาโมไบล์ด้วย Flutter 3.3.1 (Building 15 Projects)';
  let cardSubtitle = 'โดย ' + 'จักริน นิลพันธ์';

  const [status, setStatus] = React.useState('unchecked');
  const [icon, setIcon] = React.useState('heart-outline')

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setIcon(status === 'checked' ? 'heart-outline' : 'heart');
  };

  const onCardPress = () => {
    alert('onCardPress')
  }

  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* header */}
      <View 
        style={{
          width: '100%',
          height: 60,
          borderBottomWidth: 0.3,
          borderColor: '#5C51A4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          }}>
            หลักสูตร
        </Text>
      </View>
      
      <ScrollView
        style={{
          height: '100%',
        }}>
        
        {/* Card */}
        <Card style={styles.card} onPress={onCardPress} >
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Card.Title title={cardTitle} subtitle={cardSubtitle} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating
                imageSize={12}
                startingValue={5}
                readonly
              />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                Paid
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

        <Card style={styles.card} onPress={onCardPress} >
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/699'}}
          />
          <Card.Title title={cardTitle} subtitle={cardSubtitle} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating
                imageSize={12}
                startingValue={5}
                readonly
              />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                Paid
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

        <Card style={styles.card} onPress={onCardPress} >
          <Card.Cover
            style={styles.card_cover}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Card.Title title={cardTitle} subtitle={cardSubtitle} />
          <View style={styles.container}>
            <Card.Content style={styles.content}>
              <Rating
                imageSize={12}
                startingValue={5}
                readonly
              />
              <Text style={[styles.text, {marginTop: 5}]} variant="bodyMedium">
                Paid
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
  )
}

export default MyCourseScreen

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
})