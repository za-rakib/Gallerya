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
      <Text>{item.id}</Text>
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
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});

export default ImageCard;
