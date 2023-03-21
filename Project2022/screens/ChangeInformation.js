import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
import { ProvinceAPI } from '../Hooks/ProvinceAPI';
import {role, onSubmit} from './SignUp';
import moment from 'moment';
// import DatePicker from 'react-native-modern-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import {GetToken} from './../Hooks/GetToken';
import {GetDetailUser} from '../Hooks/GetDetailUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeInformation = () => {
  const {userDetail} = GetDetailUser();

  console.log('newData 3 > ', userDetail);
  // const data = userDetail !== undefined ? userDetail : null
  // const [state, setState] = useState(data)
  // useEffect(()=> {
  //   if(userDetail !== undefined) {setState(userDetail)}
  // },[data])
  // const data = useMemo(() => {
  //   return userDetail
  // },[userDetail])

  // useEffect(() => {
  //   if (userDetail) {
  //     myForm.reset(userDetail);
  //   }
  // }, [userDetail]);

  const myForm = useForm({
    defaultValues: {
      email: null,
      password: null,
      confirmPassword: null,
      firstName: null,
      lastName: '',
      job: '',
      birthday: new Date(),
      province: null,
      amphure: null,
      tambon: null,
      zipCode: null,
      agency: '',
      status: null,
      about: '',
      image_rul: '',
      id_verify: '',
      address: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    getValues,
  } = myForm;

  // Date
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [textdate, setTextDate] = useState('');
  const Change = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // const currentDate = new Date()
    setShow(Platform.OS === 'ios');
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      '-' +
      (tempDate.getMonth() + 1 < 10
        ? '0' + (tempDate.getMonth() + 1)
        : tempDate.getMonth() + 1) +
      '-' +
      (tempDate.getDate() < 10 ? '0' + tempDate.getDate() : tempDate.getDate());
    setTextDate(fDate);
    myForm.setValue('birthday', fDate);
    console.log('fDate > ' + fDate);
    console.log('textdate > ' + textdate);
    console.log('event > ' + event);
    console.log('selectedDate > ' + selectedDate);
  };
  const showMode = () => {
    setShow(true);
  };

  // Address
  const {
    province,
    amphure,
    getAmphure,
    tambon,
    getTambon,
    zipcode,
    getZipcode,
  } = ProvinceAPI();
  const changeProvince = watch('province');
  const changeAmphure = watch('amphure');
  const changeTambon = watch('tambon');

    useEffect(() => {
    if (changeProvince) {
      getAmphure(parseInt(`${changeProvince.id}`));
    }
  }, [changeProvince]);

  useEffect(() => {
    if (changeProvince && changeAmphure) {
      getTambon(
        parseInt(`${changeProvince.id}`),
        parseInt(`${changeAmphure.id}`),
      );
    }
  }, [changeAmphure]);

  useEffect(() => {
    if (changeTambon) {
      getZipcode(parseInt(`${changeTambon.id}`));
    }
  }, [changeTambon]);
  

  // onSubmit
  const onSubmit = data => {
    console.log('data > ');
    // const addUser = async params => {
    //   const url = `http://192.168.152.48:8000/user/register_mobile`;
    //   try {
    //     await axios.post(url, params);
    //     console.log('Try addUser Complete');
    //     return true;
    //   } catch (error) {
    //     console.log('Catch addUser :' + error);
    //   }
    // };
    // if (data) {
    //   try {
    //     const result = await addUser(data);
    //     if (result == true) {
    //       console.log('Register Complete !!!');
    //       alert('Register Complete !!!');
    //       token == null
    //         ? navigation.replace('Main')
    //         : navigation.replace('Main2');
    //     } else {
    //       console.log('Register Error !!!');
    //       // setActiveStep(0)
    //       // navigation.navigate('Main')
    //     }
    //   } catch (error) {
    //     console.log('Catch : ' + error);
    //   }
    // } else {
    //   console.log('test log else');
    // }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                label={'เลขบัตรประชาชน'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            )}
            name="id_verify"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                label={'ชื่อ'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            )}
            name="firstName"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                label={'นามสกุล'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            )}
            name="lastName"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                label={'อาชีพ'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            )}
            name="job"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                label={'หน่วยงาน'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            )}
            name="agency"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: '85%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={styles.input}
                  label={'วันเกิด'}
                  value={textdate}
                  onChangeText={onChange}
                  mode="outlined"
                  activeOutlineColor="#5C51A4"
                  outlineStyle={{borderRadius: 15}}
                  disabled={true}
                />
                <IconButton
                  style={{borderRadius: 10}}
                  icon="calendar-month"
                  size={35}
                  onPress={() => showMode('date')}
                />
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    is24Hour={true}
                    display="default"
                    onChange={Change}
                  />
                )}
              </View>
            )}
            name="birthday"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                label={'ที่อยู่ของคุณ'}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            )}
            name="address"
          />
          {/* <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <SelectDropdown
                data={province}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem);
                  value = selectedItem;
                  onChange(value);
                  // setTestState(value)
                }}
                defaultButtonText={'จังหวัด'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  // console.log(item);
                  return item.label;
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
            )}
            name="province"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <SelectDropdown
                data={amphure}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem);
                  value = selectedItem;
                  onChange(value);
                }}
                defaultButtonText={'อำเภอ'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  return item.label;
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
            )}
            name="amphure"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <SelectDropdown
                data={tambon}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem);
                  value = selectedItem;
                  onChange(value);
                }}
                defaultButtonText={'ตำบล'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  return item.label;
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
            )}
            name="tambon"
          />
          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <SelectDropdown
                data={zipcode}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem);
                  value = selectedItem;
                  onChange(value);
                }}
                defaultButtonText={'เลขไปรษณีย์'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  return item.label;
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
            )}
            name="zipCode"
          />

          <Controller
            control={myForm.control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, value}}) => (
              <SelectDropdown
                data={role}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem);
                  value = selectedItem;
                  onChange(value);
                }}
                defaultButtonText={'สถานะ'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                  return item.label;
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
            )}
            name="status"
          /> */}
          <Button
            style={styles.btn}
            mode="contained"
            buttonColor="#5C51A4"
            onPress={handleSubmit(onSubmit)}>
            ยืนยัน
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeInformation;

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
  birthday: {
    width: '85%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 4,
    paddingVertical: 4,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  suggestion: {
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
