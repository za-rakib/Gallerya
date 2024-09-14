import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMAGE_DETAIL} from '../constants/routeNames';
const ImageCard = ({item}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(item);
    navigation.navigate(IMAGE_DETAIL, {item: item});
  };

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <Image source={{uri: item.thumbnailUrl}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 100,
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ImageCard;
