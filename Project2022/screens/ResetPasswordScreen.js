import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button, Appbar} from 'react-native-paper';

const ResetPasswordScreen = () => {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');
  const navigation = useNavigation();
  const onSubmitPress = () => {
    alert('Submit');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label={'รหัสผ่านปัจจุบัน'}
          value={oldpassword}
          onChangeText={setOldPassword}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
        />
        <TextInput
          style={styles.input}
          label={'รหัสผ่านใหม่'}
          value={newpassword}
          onChangeText={setNewPassword}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
        />
        <TextInput
          style={styles.input}
          label={'ยืนยันรหัสผ่าน'}
          value={repeatpassword}
          onChangeText={setRepeatPassword}
          mode="outlined"
          activeOutlineColor="#5C51A4"
          outlineStyle={{borderRadius: 15}}
        />
        <Button
          style={styles.btn}
          mode="contained"
          buttonColor="#5C51A4"
          onPress={onSubmitPress}>
          ตกลง
        </Button>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

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
