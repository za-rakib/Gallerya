import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, IMAGE_DETAIL} from '../constants/routeNames';
import Gallery from '../screens/Gallery';
import ImageDetail from '../screens/ImageDetail';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={HOME} component={Gallery} />
      <HomeStack.Screen name={IMAGE_DETAIL} component={ImageDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
