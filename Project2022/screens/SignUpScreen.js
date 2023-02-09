import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {TextInput, Button, Appbar} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  const onLoginPress = () => {
    navigation.navigate('Main');
  };

  const onSignUpPress = () => {
    navigation.navigate('Information');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* Header */}
      {/* <View
        style={{
          width: '100%',
          height: 60,
          borderBottomWidth: 0.3,
          borderColor: '#5C51A4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          สร้างบัญชี
        </Text>
      </View> */}

      <Appbar.Header
        elevated={false}
        style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.BackAction onPress={() => {navigation.navigate('Main')}} />
        <Appbar.Content title="สร้างบัญชี" />
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
          secureTextEntry
          onChangeText={setPassword}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
        />
        <TextInput
          style={styles.input}
          label={'Repeat Password'}
          value={repeatpassword}
          secureTextEntry
          onChangeText={setRepeatPassword}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
        />
        <Button
          style={styles.btn}
          mode="contained"
          buttonColor="#5C51A4"
          onPress={onSignUpPress}>
          สร้างบัญชี
        </Button>
        <Text style={styles.text} onPress={onLoginPress}>
          ฉันมีบัญชีผู้ใช้แล้ว
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
