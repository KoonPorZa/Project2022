import React, {useState, useEffect} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

// Tabs
import HomeScreen from './tabs/HomeScreen';
import MyCourseScreen from './tabs/MyCourseScreen';
import FavoriteScreen from './tabs/FavoriteScreen';
import QueueScreen from './tabs/QueueScreen';
import AboutUserScreen from './tabs/AboutUserScreen';

const Home = () => <HomeScreen />;
const Queue = () => <QueueScreen />;
const MyCourse = () => <MyCourseScreen />;
const Favorite = () => <FavoriteScreen />;
const AboutUser = () => <AboutUserScreen />;

const MainScreen2 = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'home',
      title: 'แนะนำ',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {key: 'queue', title: 'เข้าคิว', focusedIcon: 'human-queue'},
    {key: 'mycourse', title: 'คอร์สของฉัน', focusedIcon: 'bookshelf'},
    {
      key: 'favorite',
      title: 'ถูกใจ',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'page',
      title: 'บัญชี',
      focusedIcon: 'account-circle',
      unfocusedIcon: 'account-circle-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    queue: Queue,
    mycourse: MyCourse,
    favorite: Favorite,
    page: AboutUser
  });

  

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#9382FF"
      // theme={{colors: {secondaryContainer: 'blue'}}}
    />
  );
};

export default MainScreen2;
