import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavContainer from './src/navigations/Index';
import {Provider} from 'react-redux';
import store from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
