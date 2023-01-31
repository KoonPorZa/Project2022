import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {TextInput, Button, Avatar} from 'react-native-paper';

const InformationScreen = () => {
  const navigation = useNavigation();

  const [profile, setProfile] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [career, setCareer] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subdistrict, setSubDistrict] = useState('');
  const [postnumber, setPostNumber] = useState('');
  const [agency, setAgency] = useState('');
  const [status, setStatus] = useState('');

  const onSignUpPress = () => {
    alert('onSignUpPress');
  };

  const onCancelPress = () => {
    navigation.navigate('Main')
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      {/* Header */}
      <View
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
          ข้อมูลส่วนตัว
        </Text>
      </View>

      {/* Input Form */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Avatar.Image
            style={{marginBottom:20}}
            size={120}
            source={{uri: 'https://picsum.photos/500'}}
          />
          <TextInput
            style={styles.input}
            label={'ชื่อ'}
            value={firstname}
            onChangeText={setFirstName}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'นามสกุล'}
            value={lastname}
            onChangeText={setLastName}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'อาชีพ'}
            value={career}
            onChangeText={setCareer}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'วัน เดือน ปีเกิด'}
            value={birthdate}
            onChangeText={setBirthDate}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'ที่อยู่'}
            value={address}
            onChangeText={setAddress}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'จังหวัด'}
            value={province}
            onChangeText={setProvince}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'อำเภอ'}
            value={district}
            onChangeText={setDistrict}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'ตำบล'}
            value={subdistrict}
            onChangeText={setSubDistrict}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'เลขไปรษณีย์'}
            value={postnumber}
            onChangeText={setPostNumber}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'หน่วยงาน'}
            value={agency}
            onChangeText={setAgency}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <TextInput
            style={styles.input}
            label={'สถานะ'}
            value={status}
            onChangeText={setStatus}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
          />
          <View style={{flexDirection: 'row'}}>
            <Button
              style={styles.btn}
              mode="outlined"
              textColor="#5C51A4"
              onPress={onCancelPress}>
              ยกเลิก
            </Button>
            <Button
              style={styles.btn}
              mode="contained"
              buttonColor="#5C51A4"
              onPress={onSignUpPress}>
              สร้างบัญชี
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  input: {
    width: '85%',
    marginBottom: 10,
  },
  btn: {
    width: 140,
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    color: '#000',
    marginTop: 15,
  },
});
