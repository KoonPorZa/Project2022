import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';

const testapi = () => {
  const baseUrl = 'https://reqres.in';

  axios.get(`${baseUrl}/api/user/1`).then(response => {
    console.log(response.data);
  });
  return (
    <View>
      <Text>testapi</Text>
    </View>
  );
};

export default testapi;

const styles = StyleSheet.create({});
