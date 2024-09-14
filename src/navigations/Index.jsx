import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <HomeNavigator /> */}
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default AppNavContainer;
