import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Button, Appbar, Avatar, IconButton} from 'react-native-paper';
import {GetToken} from '../../Hooks/GetToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetUserEmail} from '../../Hooks/GetUserEmail';
import {GetDetailUserAPI} from '../../Hooks/User/GetDetailUserAPI';
import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
// import { useUploadFile } from '../../Hooks/useUploadFile';

const AboutUserScreen = () => {
  const navigation = useNavigation();
  const {token} = GetToken();
  const {userEmail} = GetUserEmail();

  const onResetPasswordPress = () => {
    navigation.navigate('ResetPassword');
  };
  const onSignOutPress = async () => {
    try {
      if (token !== null) {
        await AsyncStorage.removeItem('AccessToken');
        await AsyncStorage.removeItem('userFavorite');
        await AsyncStorage.removeItem('userCourseJoin');
        await AsyncStorage.removeItem('userEmail');
        await AsyncStorage.removeItem('userDetail');
        await AsyncStorage.removeItem('idUser');
        console.log('remove token complete');
        navigation.navigate('Main');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onShowInfoPress = () => {
    navigation.navigate('ShowInformation');
  };

  // Open Camera & Gallery Image
  const [image, setImage] = useState(null);
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const result = await launchCamera(options);
    setImage(result ? result.assets[0].uri : null);
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setImage(result ? result.assets[0].uri : null);
  };
  const deleteImage = () => {
    setImage(null)
  }
  const uploadImage = () => {
    alert('upload')
  }

  // Upload Image
  // const { uploadFile, uploadState } = useUploadFile()
  const onUploadImage = files => {
    if (files) {
      const file = files[0];
      if (file.size <= 5 * 1024 * 1024) {
        // check if file is less than 5MB
        uploadFile(file, `myImages/${uid}/`);
      }
    }
  };

  //Upload Image
  // const uploadImage = async () => {
  //   const {uri} = image;
  //   const filename = uri.substring(uri.lastIndexOf('/') + 1);
  //   const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  //   setUploading(true);
  //   setTransferred(0);
  //   const task = storage().ref(filename).putFile(uploadUri);
  //   // set progress state
  //   task.on('state_changed', snapshot => {
  //     setTransferred(
  //       Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
  //     );
  //   });
  //   try {
  //     await task;
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   setUploading(false);
  //   Alert.alert(
  //     'Photo uploaded!',
  //     'Your photo has been uploaded to Firebase Cloud Storage!',
  //   );
  //   setImage(null);
  // };

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
        <Appbar.Content title="ข้อมูลผู้ใช้" style={{alignItems: 'center'}} />
      </Appbar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Avatar.Image
            size={120}
            source={{uri: image ? image : 'https://picsum.photos/700'}}
          />
          {image ? (
            <View
              style={{
                width: 260,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
                <Button
                icon="delete"
                mode="outlined"
                textColor="#9382FF"
                style={{borderColor: '#8e8e8e', width: 120}}
                onPress={deleteImage}>
                Delete
              </Button>
              <Button
                icon="upload"
                mode="outlined"
                textColor="#9382FF"
                style={{borderColor: '#8e8e8e', width: 120}}
                onPress={uploadImage}>
                Upload
              </Button>
            </View>
          ) : (
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
                onPress={openCamera}>
                Camera
              </Button>
              <Button
                icon="image-multiple"
                mode="outlined"
                textColor="#9382FF"
                style={{borderColor: '#8e8e8e', width: 120}}
                onPress={openGallery}>
                Gallery
              </Button>
            </View>
          )}
        </View>
        <View style={styles.email}>
          <Text style={styles.text}>{userEmail}</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.btn}>
            <Text style={styles.text}>ข้อมูลส่วนตัว</Text>
            <IconButton icon="chevron-right" onPress={onShowInfoPress} />
          </View>
          <View style={styles.btn}>
            <Text style={styles.text}>เปลี่ยนรหัสผ่าน</Text>
            <IconButton icon="chevron-right" onPress={onResetPasswordPress} />
          </View>
          <View style={styles.btn}>
            <Text style={styles.text}>Log Out</Text>
            <IconButton icon="chevron-right" onPress={onSignOutPress} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    color: 'black',
  },
  email: {
    paddingBottom: 15,
    alignItems: 'center',
  },
  menu: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
