import {View, Text, TextInput} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={{backgroundColor: '#eee', padding: 10}}>
      <Text>Rakib</Text>
      <TextInput
        placeholder="Search..."
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
    </View>
  );
};

export default SearchBar;
