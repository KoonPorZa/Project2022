import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {TextInput, Button, Appbar} from 'react-native-paper';

const QueueScreen = () => {
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
        <Appbar.Content title="เข้าสู่ระบบ" style={{alignItems: 'center'}} />
      </Appbar.Header>
    </View>
  );
};

export default QueueScreen;

const styles = StyleSheet.create({});
