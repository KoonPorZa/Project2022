import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Title, ToggleButton, Appbar, Button, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import DatePicker from 'react-native-date-picker';

const QuizScreen = () => {
  const [queue, setQueue] = useState(0);

  const navigation = useNavigation();

  // Toggle Button
  const [status, setStatus] = useState('unchecked');
  const [icon, setIcon] = useState('heart-outline');
  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setIcon(status === 'checked' ? 'heart-outline' : 'heart');
  };

  // Datetime
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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

  // Call Function onPress
  const onButtonPress = () => {
    // navigation.navigate('Quiz')
    alert('เช็คชื่อ')
  };

  const onBackPress = () => {
    navigation.navigate('Main');
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
        <Appbar.BackAction onPress={onBackPress} />
        <Appbar.Content title="รายละเอียดหลักสูตร" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: 'https://picsum.photos/710'}}
          style={styles.image}
        />
        <View style={styles.content}>
          <Title style={[styles.text, {fontWeight: 'bold'}]}>
            พัฒนาโมไบล์ด้วย Flutter 3.3.1 (Building 15 Projects)
          </Title>
          <Text style={styles.text}>
            ออกแบบและพัฒนา App บน Android, iOS ด้วยการเขียนโค้ดเพียงครั้งเดียว
          </Text>
          <View style={styles.rating}>
            <Text style={{fontSize: 12, marginRight: 3}}>5.0</Text>
            <Rating imageSize={12} startingValue={5} readonly />
            <Text style={{fontSize: 12, marginLeft: 10}}>
              (200 คะแนน) 200 ผู้เรียน
            </Text>
          </View>
          <Text style={styles.text}>สร้างโดย จักริน นิลพันธ์</Text>
          <View style={styles.detail}>
            <Text style={styles.text}>ลงทะเบียนได้ถึง {currentDate}</Text>
            <Text style={styles.text}>
              เริ่มเรียน {currentDate} ถึง {currentDate}
            </Text>
            <Text style={styles.text}>วันที่เรียน พุธ เวลา {currentTime}</Text>
            <Text style={styles.text}>จำนวนผู้เข้าคิว {queue}</Text>
            <View style={{marginVertical: 5}} />
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
              สิ่งที่คุณจะได้เรียนรู้
            </Text>
            <Text style={styles.text}>1. เข้าใจการเขียน Flutter</Text>
            <Text style={styles.text}>2. เข้าใจการเขียน Flutter</Text>
            <Text style={styles.text}>3. เข้าใจการเขียน Flutter</Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
              ข้อกำหนด
            </Text>
            <Text style={styles.text}>1. ผู้เรียนจะต้องมีพื้นฐานภาษา Dart</Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
              คำอธิบาย
            </Text>
            <Text style={styles.text}>
              หลักสูตรนี้คุณจะได้เรียนรู้การประยุกต์ใช้งาน Flutter
              สำหรับการสร้างโมไบล์แอปพลิเคชันทั้งหมด 15 แอปพลิเคชัน
              รวมอยู่ในหลักสูตรเดียว อัดแน่นด้วยเนื้อหาคุณภาพจากผู้สอนที่ชำนาญ
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
              วิทยากร
            </Text>
            <Avatar.Image
              style={{marginBottom: 20}}
              size={60}
              source={{uri: 'https://picsum.photos/500'}}
            />
            <Text style={styles.text}></Text>
          </View>
        </View>

        {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
        {/* <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
      </ScrollView>
      <Appbar style={styles.bottom}>
        {/* <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          คะแนนที่ได้ 10/10
        </Text> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Button
            mode="contained"
            buttonColor="#5C51A4"
            style={styles.btn}
            onPress={onButtonPress}
            labelStyle={styles.txtbtn}>
            เช็คชื่อ
          </Button>
        </View>
      </Appbar>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  detail: {
    marginVertical: 5,
  },
  text: {
    color: 'black',
  },
  rating: {
    marginRight: 'auto',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    height: 60,
    backgroundColor: '#e8e8e8',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  btn: {
    borderRadius: 5,
    width: 170,
    height: 50,
    justifyContent: 'center',
  },
  btnfav: {
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    marginLeft: 5,
  },
  txtbtn: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
