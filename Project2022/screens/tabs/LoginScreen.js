import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {TextInput, Button, Appbar} from 'react-native-paper';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    alert('onLoginPress');
  };

  const onForgotPasswordPress = () => {
    alert('OnForgotPasswordPress');
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
        />
        <Button
          style={styles.btn}
          mode="contained"
          buttonColor="#5C51A4"
          onPress={onLoginPress}>
          เข้าสู่ระบบ
        </Button>
        <Text style={styles.text} onPress={onForgotPasswordPress}>
          ฉันลืมรหัสผ่าน
        </Text>
        <Text style={styles.text} onPress={onSignUpPress}>
          สร้างบัญชีของฉัน
        </Text>
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
  },
});
