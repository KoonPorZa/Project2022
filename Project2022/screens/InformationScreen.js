import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useMemo} from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  Button,
  Avatar,
  Appbar,
  IconButton,
} from 'react-native-paper';

import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const InformationScreen = () => {
  const navigation = useNavigation();

  const [profile, setProfile] = useState('');
  const [idcardnum, setIdCardNum] = useState('');
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

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const inputStatus = [
    'บุคคลทั่วไป',
    'นักศึกษา (มทร.ธัญบุรี)',
    'ศิษย์เก่า (มทร.ธัญบุรี)',
  ];

  const onSignUpPress = () => {
    alert('onSignUpPress');
  };

  const onCancelPress = () => {
    navigation.navigate('Main');
  };

  const [imageUri, setImageUri] = useState('');
  const [imageUriGallary, setImageUriGallary] = useState('');

  const onCameraPress = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        setImageUri(source);
      }
    });
  };

  const onGallaryPress = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        setImageUriGallary(source);
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      {/* Header */}
      <Appbar.Header
        elevated={false}
        style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Appbar.Content title="ข้อมูลส่วนตัว" />
      </Appbar.Header>

      {/* Input Form */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Avatar.Image
            size={120}
            source={{uri: 'https://picsum.photos/500'}}
          />
          <View
            style={{
              width: 260,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Button
              icon="camera"
              mode="outlined"
              textColor="#9382FF"
              style={{borderColor: '#8e8e8e', width: 120}}
              onPress={() => {}}>
              Camera
            </Button>
            <Button
              icon="upload"
              mode="outlined"
              textColor="#9382FF"
              style={{borderColor: '#8e8e8e', width: 120}}
              onPress={() => {}}>
              Upload
            </Button>
          </View>

          {/* <Image
            source={imageUri}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'black',
            }}
          />
          <Button
            style={styles.btn}
            mode="contained"
            buttonColor="#5C51A4"
            onPress={onCameraPress}>
            Camera
          </Button>

          <Image
            source={imageUriGallary}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'black',
            }}
          />
          <Button
            style={styles.btn}
            mode="contained"
            buttonColor="#5C51A4"
            onPress={onGallaryPress}>
            Gallary
          </Button> */}

          <TextInput
            style={styles.input}
            label={'เลขบัตรประชาชน'}
            value={idcardnum}
            onChangeText={setIdCardNum}
            mode="outlined"
            activeOutlineColor="#5C51A4"
            outlineStyle={{borderRadius: 15}}
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
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'จังหวัด'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown_BtnStyle}
            buttonTextStyle={styles.dropdown_BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#000'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown_DropdownStyle}
            rowStyle={styles.dropdown_RowStyle}
            rowTextStyle={styles.dropdown_RowTxtStyle}
          />
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'อำเภอ'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown_BtnStyle}
            buttonTextStyle={styles.dropdown_BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#000'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown_DropdownStyle}
            rowStyle={styles.dropdown_RowStyle}
            rowTextStyle={styles.dropdown_RowTxtStyle}
          />
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'ตำบล'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown_BtnStyle}
            buttonTextStyle={styles.dropdown_BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#000'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown_DropdownStyle}
            rowStyle={styles.dropdown_RowStyle}
            rowTextStyle={styles.dropdown_RowTxtStyle}
          />
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'เลขไปรษณีย์'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown_BtnStyle}
            buttonTextStyle={styles.dropdown_BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#000'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown_DropdownStyle}
            rowStyle={styles.dropdown_RowStyle}
            rowTextStyle={styles.dropdown_RowTxtStyle}
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
          <SelectDropdown
            data={inputStatus}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'สถานะ'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown_BtnStyle}
            buttonTextStyle={styles.dropdown_BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#000'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown_DropdownStyle}
            rowStyle={styles.dropdown_RowStyle}
            rowTextStyle={styles.dropdown_RowTxtStyle}
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
    backgroundColor: '#fff',
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
  dropdown_BtnStyle: {
    width: '85%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8e8e8e',
    marginBottom: 10,
    marginTop: 6,
  },
  dropdown_BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
  },
  dropdown_DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown_RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown_RowTxtStyle: {
    color: '#000',
    textAlign: 'left',
  },
});
