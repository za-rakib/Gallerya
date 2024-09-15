/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {ALBUM_NAVIGATOR, HOME_NAVIGATOR} from '../constants/routeNames';
import HomeNavigator from './HomeNavigator';
import AlbumsNavigator from './AlbumsNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../components/Icon';

const BottomTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  const insets = useSafeAreaInsets();
  const tabHeight = insets.bottom + 50;

  console.log({tabHeight});
  return (
    <Tab.Navigator
      initialRouteName={HOME_NAVIGATOR}
      activeColor="#ffffff"
      inactiveColor="#b0bec5"
      barStyle={{
        backgroundColor: '#4a148c',
        height: 70,
        marginTop: 10,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === HOME_NAVIGATOR) {
            iconName = 'home';
          } else if (route.name === ALBUM_NAVIGATOR) {
            iconName = 'image';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
      <Tab.Screen name={ALBUM_NAVIGATOR} component={AlbumsNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
