import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMAGE_DETAIL} from '../constants/routeNames';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

const ImageCard = ({item}) => {
  //   console.log({item: item.id});
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(IMAGE_DETAIL, {item});
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.8}>
      {/* <Text>{item.id}</Text> */}
      <FastImage
        style={styles.image}
        source={{
          uri: item.thumbnailUrl,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 20,
    height: 100,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default ImageCard;
