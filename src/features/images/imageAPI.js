import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getImages = async album => {
  try {
    // Check cache for images of the album
    const cachedImages = await AsyncStorage.getItem(`album-${album}`);
    if (cachedImages) {
      return JSON.parse(cachedImages);
    }

    // If not cached, fetch from API
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album}`,
    );
    const responseJson = response.data;

    // Cache images for future use
    await AsyncStorage.setItem(`album-${album}`, JSON.stringify(responseJson));

    return responseJson;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
