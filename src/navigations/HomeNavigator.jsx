import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME} from '../constants/routeNames';
import Home from '../screens/Home';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={HOME} component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
