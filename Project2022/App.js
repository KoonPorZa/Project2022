import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';

// React Native Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';
import MainScreen2 from './screens/MainScreen2';
import HomeScreen from './screens/tabs/HomeScreen';
import SignUp from './screens/SignUp';
import InformationScreen from './screens/InformationScreen';
import DetailCourseScreen from './screens/DetailCourseScreen';
import BuyCourseScreen from './screens/BuyCourseScreen';
import QueueScreen from './screens/tabs/QueueScreen';
import QuizScreen from './screens/QuizScreen';
import Quiz from './screens/Quiz';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import CategoryScreen from './screens/CategoryScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import AboutUserScreen from './screens/tabs/AboutUserScreen';


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
          name="Main2"
          component={MainScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailCourse"
          component={DetailCourseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUser"
          component={AboutUserScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
