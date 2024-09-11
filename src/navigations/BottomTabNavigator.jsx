import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {ALBUM_NAVIGATOR, HOME_NAVIGATOR} from '../constants/routeNames';
import HomeNavigator from './HomeNavigator';
import AlbumsNavigator from './AlbumsNavigator';

const BottomTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={() => {
          return {headerShown: false};
        }}
        backBehavior="history">
        <Tab.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        <Tab.Screen name={ALBUM_NAVIGATOR} component={AlbumsNavigator} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
