import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  Button,
  Appbar,
  Avatar,
  IconButton,
} from 'react-native-paper';
import AboutUserScreen from './AboutUserScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = async () => {
    try {
      axios.defaults.withCredentials = true;
      const baseUrl = 'http://192.168.152.249:8000';
      const result = await axios.post(`${baseUrl}/auth/signinmobile`, {
        email,
        password,
      });
      const token = result.data.data.token;
      console.log(token)
      if(token) {
        await AsyncStorage.setItem('AccessToken', token);
      }
      console.log('Login Complete');
      navigation.replace('Main2');
    } catch (error) {
      console.log("don't have user");
      alert("don't have user");
    }
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
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
        <Appbar.Content title="เข้าสู่ระบบ" style={{alignItems: 'center'}} />
      </Appbar.Header>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
        />
        <TextInput
          style={styles.input}
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
          secureTextEntry
        />
        <Button
          style={styles.btn_login}
          mode="contained"
          buttonColor="#5C51A4"
          onPress={() => onLoginPress()}>
          เข้าสู่ระบบ
        </Button>
        <View style={{marginTop: 15}}>
          <Text style={styles.text} onPress={onForgotPasswordPress}>
            ฉันลืมรหัสผ่าน
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.text} onPress={onSignUpPress}>
            สร้างบัญชีของฉัน
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    width: '85%',
    marginBottom: 10,
  },
  btn_login: {
    width: 150,
    marginTop: 10,
  },
  text: {
    color: '#000',
  },
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
