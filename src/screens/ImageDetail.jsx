import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const ImageDetail = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.idText}>Image #{item.id}</Text>

      <View style={styles.imageContainer}>
        <Image source={{uri: item.url}} style={styles.image} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.imageOverlay}
        />
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f3f5',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  idText: {
    fontSize: 16,
    color: '#888',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imageContainer: {
    width: '100%',
    height: 350,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageTitle: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  },
  backButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageDetail;
