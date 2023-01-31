import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

// Tabs
import HomeScreen from './tabs/HomeScreen';
import SearchScreen from './tabs/SearchScreen';
import MyCourseScreen from './tabs/MyCourseScreen';
import FavoriteScreen from './tabs/FavoriteScreen';
import LoginScreen from './tabs/LoginScreen';

const Home = () => <HomeScreen />;
const Search = () => <SearchScreen />;
const MyCourse = () => <MyCourseScreen />;
const Favorite = () => <FavoriteScreen />;
const Login = () => <LoginScreen />;

const MainScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'หน้าหลัก', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'search', title: 'ค้นหา', focusedIcon: 'magnify' },
    { key: 'mycourse', title: 'หลักสูตร', focusedIcon: 'bookshelf' },
    { key: 'favorite', title: 'ถูกใจ', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'login', title: 'บัญชี', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    search: Search,
    mycourse: MyCourse,
    favorite: Favorite,
    login: Login,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor='#9382FF'
      // theme={{colors: {secondaryContainer: 'blue'}}}
    />
  );
};

export default MainScreen;