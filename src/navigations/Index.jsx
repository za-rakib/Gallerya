import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppNavContainer = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default AppNavContainer;
