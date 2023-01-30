import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper'

const LoginScreen = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    alert('onLoginPress')
  }

  const onForgotPasswordPress = () => {
    alert('OnForgotPasswordPress')
  }

  const onSignUpPress = () => {
    alert('onSignUpPress')
  }

  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>

      {/* Header */}
      <View style={{
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
            เข้าสู่ระบบ
        </Text>
      </View>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          mode='outlined'
          activeOutlineColor='#5C51A4'
          outlineStyle={{ borderRadius: 15 }}
        />
        <TextInput
          style={styles.input}
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          mode='outlined'
          activeOutlineColor='#5C51A4'
          outlineStyle={{ borderRadius: 15 }}
        />
        <Button
          style={styles.btn}
          mode='contained'
          buttonColor='#5C51A4'
          onPress={onLoginPress}
        >เข้าสู่ระบบ</Button>
        {/* <Button
          mode='text'
          style={{
            marginTop: 10,
          }}
          onPress={onForgotPasswordPress}
        >ฉันลืมรหัสผ่าน</Button> */}
        <Text style={styles.text} onPress={onForgotPasswordPress}>ฉันลืมรหัสผ่าน</Text>
        {/* <Button
          mode='text'
          onPress={onSignUpPress}
        >สร้างบัญชีของฉัน</Button> */}
        <Text style={styles.text} onPress={onSignUpPress}>สร้างบัญชีของฉัน</Text>
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
  btn: {
    width: 150,
    marginTop: 10,
  },
  text: {
    color: '#000',
    marginTop: 15,
  }
});
