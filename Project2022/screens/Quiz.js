import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {
  Card,
  ToggleButton,
  Appbar,
  RadioButton,
  Button,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Quiz = () => {
  const [value, setValue] = React.useState('first');

  const onSubmitPress = () => {};
  return (
    <View>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title title={'1. แบบทดสอบที่ 1'} />
          <Card.Content>
            <RadioButton.Group
              onValueChange={newValue => setValue(newValue)}
              value={value}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="1" />
                <Text>1</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="2" />
                <Text>2</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="3" />
                <Text>3</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="4" />
                <Text>4</Text>
              </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title={'2. แบบทดสอบที่ 2'} />
          <Card.Content>
            <RadioButton.Group
              onValueChange={newValue => setValue(newValue)}
              value={value}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="1" />
                <Text>1</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="2" />
                <Text>2</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="3" />
                <Text>3</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="4" />
                <Text>4</Text>
              </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>
        <View style={{alignItems: 'center', padding: 15}}>
          <Button
            style={styles.btn}
            mode="contained"
            buttonColor="#5C51A4"
            onPress={onSubmitPress}>
            เสร็จสิ้น
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Quiz;

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
  btn: {
    width: '60%',
  },
});
