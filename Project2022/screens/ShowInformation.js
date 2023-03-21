import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GetDetailUser} from '../Hooks/GetDetailUser';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ShowInformation = () => {
  const navigation = useNavigation();
  const {userDetail} = GetDetailUser();

  const onChangePress = () => {
    // navigation.navigate('ChangeInformation');
    alert('Edit')
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView>
        <View style={styles.container}>
          {userDetail ? (
            <View>
              <Text style={styles.text}>
                เลขประจำตัวประชาชน : {userDetail.id_verify}
              </Text>
              <Text style={styles.text}>
                ชื่อ : {userDetail.firstName}
              </Text>
              <Text style={styles.text}>
                นามสกุล : {userDetail.lastName}
              </Text>
              <Text style={styles.text}>อาชีพ : {userDetail.job}</Text>
              <Text style={styles.text}>
                หน่วยงาน : {userDetail.agency}
              </Text>
              <Text style={styles.text}>
                วันเกิด : {userDetail.birthday}
              </Text>
              <Text style={styles.text}>
                ที่อยู่ : {userDetail.address}
              </Text>
              <Text style={styles.text}>
                จังหวัด : {userDetail.province?.label}
              </Text>
              <Text style={styles.text}>
                อำเภอ : {userDetail.amphure?.label}
              </Text>
              <Text style={styles.text}>
                ตำบล : {userDetail.tambon?.label}
              </Text>
              <Text style={styles.text}>
                เลขไปรษณีย์ : {userDetail.tambon?.zipcode}
              </Text>
              <Text style={styles.text}>
                สถานะผู้ใช้ : {userDetail.status?.label}
              </Text>
              <View style={{alignItems: 'center'}}>
                {/* <Button
                  style={styles.btn}
                  mode="contained"
                  buttonColor="#5C51A4"
                  onPress={onChangePress}>
                  แก้ไขข้อมูล
                </Button> */}
              </View>
            </View>
          ) : (
            <Text style={styles.text}>ไม่มีข้อมูล</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ShowInformation;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    marginVertical: 5,
  },
  btn: {
    width: 140,
    marginTop: 20,
    marginHorizontal: 10,
  },
  container: {
    justifyContent: 'center',
    marginTop: 20,
  },
});
