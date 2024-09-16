import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getImages = async payload => {
  try {
    const cachedImages = await AsyncStorage.getItem(`album-${payload.album}`);
    if (cachedImages) {
      return JSON.parse(cachedImages);
    }

    // If not cached, fetch from API
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${payload.album}`,
    );
    const responseJson = response.data;

    await AsyncStorage.setItem(
      `album-${payload.album}`,
      JSON.stringify(responseJson),
    );

    return responseJson;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
