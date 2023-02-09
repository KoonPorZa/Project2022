import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';

// React Native Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';
import SignUpScreen from './screens/SignUpScreen';
import InformationScreen from './screens/InformationScreen';
import DetailCourseScreen from './screens/DetailCourseScreen';
import BuyCourseScreen from './screens/BuyCourseScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Information"
          component={InformationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuyCourse"
          component={BuyCourseScreen}
          options={{title: 'ชำระเงิน'}}
        />
        <Stack.Screen
          name="DetailCourse"
          component={DetailCourseScreen}
          options={{title: 'รายละเอียดหลักสูตร'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
