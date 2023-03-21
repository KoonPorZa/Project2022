import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, TextInput, Appbar} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const BuyCourseScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    var monthName = month == 1 ? 'มกราคม' : 'กุมภาพันธ์';
    setCurrentDate(date + ' ' + monthName + ' ' + year + ' ');
    setCurrentTime(hours + ':00 - ' + (hours + 3) + ':00 น.');
  }, []);

  const onSubmitPress = () => {
    alert('submit');
  };
  const onBackPress = () => {
    navigation.navigate('DetailCourse');
  };

  // Open Camera & Gallery Image
  const [image, setImage] = useState('https://picsum.photos/700');
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].uri);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* Header */}

      {/* <Appbar.Header
        elevated={false}
        style={{borderBottomWidth: 0.5, borderBottomColor: '#8e8e8e'}}>
        <Appbar.BackAction onPress={onBackPress} />
        <Appbar.Content title="การชำระเงิน" />
      </Appbar.Header> */}
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image source={require('../src/images/ktb.jpg')} style={styles.img} />
          <View style={{flexDirection: 'column', marginLeft: 20}}>
            <Text style={{fontWeight: 'bold'}}>984-1-47019-5</Text>
            <Text style={{fontWeight: 'bold'}}>นาย จักริน นิลพันธ์</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.left_box}>
              <Text style={styles.txt}>ชื่อคอร์ส</Text>
            </View>
            <View style={styles.right_box}>
              <Text style={styles.txt}>
                พัฒนาโมไบล์ด้วย Flutter 3.3.1 (Building 15 Projects)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.left_box}>
              <Text style={styles.txt}>ราคาคอร์ส</Text>
            </View>
            <View style={styles.right_box}>
              <Text style={styles.txt}>2,600 บาท</Text>
            </View>
          </View>
          <View style={{marginVertical: 5}} />
          <View style={styles.row}>
            <View style={[styles.left_box, {justifyContent: 'center'}]}>
              <Text style={styles.txt}>ชื่อบัญชี</Text>
            </View>
            <View style={styles.right_box}>
              <TextInput
                style={styles.input}
                label={'ชื่อบัญชี'}
                value={name}
                onChangeText={setName}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.left_box, {justifyContent: 'center'}]}>
              <Text style={styles.txt}>จำนวนเงิน</Text>
            </View>
            <View style={styles.right_box}>
              <TextInput
                style={styles.input}
                label={'จำนวนเงิน'}
                value={name}
                onChangeText={setName}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.left_box, {justifyContent: 'center'}]}>
              <Text style={styles.txt}>วันที่</Text>
            </View>
            <View style={styles.right_box}>
              <TextInput
                style={styles.input}
                label={'เวลา'}
                value={name}
                onChangeText={setName}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.left_box, {justifyContent: 'center'}]}>
              <Text style={styles.txt}>เวลา</Text>
            </View>
            <View style={styles.right_box}>
              <TextInput
                style={styles.input}
                label={'เวลา'}
                value={name}
                onChangeText={setName}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.left_box, {justifyContent: 'center'}]}>
              <Text style={styles.txt}>หมายเลขโทรศัพท์</Text>
            </View>
            <View style={styles.right_box}>
              <TextInput
                style={styles.input}
                label={'หมายเลขโทรศัพท์'}
                value={name}
                onChangeText={setName}
                mode="outlined"
                activeOutlineColor="#5C51A4"
                outlineStyle={{borderRadius: 15}}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.left_box, {justifyContent: 'center'}]}>
              <Text style={styles.txt}>หลักฐานการโอน</Text>
            </View>
            <View style={styles.right_box}>
              <Button
                style={styles.upload}
                mode="outlined"
                textColor="#5C51A4"
                onPress={openGallery}>
                นำเข้ารูปภาพ
              </Button>
            </View>
          </View>
          <Image
            source={{uri: image}}
            style={{
              height: 200,
              width: 200,
              borderWidth: 1,
              borderColor: '#000',
            }}
          />
          <Button
            style={styles.btn}
            mode="contained"
            buttonColor="#5C51A4"
            onPress={onSubmitPress}>
            เสร็จสิ้น
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default BuyCourseScreen;

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 60,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    marginTop: -15,
  },
  txt: {
    fontSize: 16,
  },
  left_box: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '33%',
    paddingVertical: 5,
  },
  right_box: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '60%',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  input: {
    width: '85%',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  btn: {
    width: 150,
    marginVertical: 10,
  },
  upload: {
    marginVertical: 10,
  },
});
