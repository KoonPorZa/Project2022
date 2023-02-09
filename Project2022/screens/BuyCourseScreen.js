import {StyleSheet, View, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Button, Text, TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BuyCourseScreen = () => {
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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1, alignItems: 'center'}}>
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
        <View style={{flexDirection: 'row'}}>
          <View style={styles.left_box}>
            <Text style={styles.txt}>ชื่อหลักสูตร</Text>
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
        <View style={{flexDirection: 'row'}}>
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
        <View style={{flexDirection: 'row', marginTop: -15}}>
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
        <View style={{flexDirection: 'row', marginTop: -15}}>
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
        <View style={{flexDirection: 'row', marginTop: -15}}>
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
        <View style={{flexDirection: 'row', marginTop: -15}}>
          <View style={[styles.left_box, {justifyContent: 'center'}]}>
            <Text style={styles.txt}>หมายเลขโทรศัพท์</Text>
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
        <View style={{flexDirection: 'row', marginTop: -15}}>
          <View style={[styles.left_box, {justifyContent: 'center'}]}>
            <Text style={styles.txt}>หลักฐานการโอน</Text>
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

        <View>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
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
  txt: {
    fontSize: 16,
  },
  left_box: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '35%',
    paddingVertical: 5,
  },
  right_box: {
    flexDirection: 'column',
    backgroundColor: 'white',
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
});
