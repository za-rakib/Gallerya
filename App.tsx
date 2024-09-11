import {View, Text} from 'react-native';
import React from 'react';
import AppNavContainer from './src/navigations/Index';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavContainer />
    </View>
  );
};

export default App;
