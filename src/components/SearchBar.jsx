import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from './Icon';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="search" size={26} color="#fff" />
      </View>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginTop: 20,
    // paddingHorizontal: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#4a148c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
