import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  Button,
  Appbar,
  Avatar,
  Divider,
  IconButton,
} from 'react-native-paper';

const AboutUserScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onResetPasswordPress = () => {
    navigation.navigate('ResetPassword')
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* Header */}

      <Appbar.Header
        elevated={false}
        style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.Content title="ข้อมูลผู้ใช้" style={{alignItems: 'center'}} />
      </Appbar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Avatar.Image
            size={120}
            source={{uri: 'https://picsum.photos/500'}}
          />
        </View>
        <View style={styles.email}>
          <Text style={styles.text}>account.user@mail.rmutt.ac.th</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.btn}>
            <Text style={styles.text}>ข้อมูลส่วนตัว</Text>
            <IconButton icon="chevron-right" />
          </View>
          <View style={styles.btn}>
            <Text style={styles.text}>เปลี่ยนรหัสผ่าน</Text>
            <IconButton icon="chevron-right" onPress={onResetPasswordPress}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    color: 'black',
  },
  email: {
    padding: 15,
    alignItems: 'center',
  },
  menu: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
