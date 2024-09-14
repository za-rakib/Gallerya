import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavContainer from './src/navigations/Index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <AppNavContainer />
    </SafeAreaView>
  );
};

export default App;
