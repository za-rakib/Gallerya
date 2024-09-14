import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const {width} = useWindowDimensions();

  const calculateNumColumns = () => {
    const cardSize = 120;
    const margin = 10;
    return Math.floor(width / (cardSize + margin * 2));
  };

  const fetchPhotos = (startIndex, limit) => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(data => {
        const photosData = data.slice(startIndex, startIndex + limit);
        setItems(existingItems => [...existingItems, ...photosData]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPhotos(0, 20);
  }, []);

  const renderItem = ({item}) => <ImageCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar animated={true} backgroundColor="#ffffff" /> */}
      {/* <SearchBar /> */}
      <Text style={styles.idText}>Image</Text>
      <View>
        {loading && <ActivityIndicator size="large" color="#ff004c" />}
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={calculateNumColumns()}
          showsVerticalScrollIndicator={false}
          // onEndReached={() => fetchPhotos(items.length, 20)}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  idText: {
    fontSize: 25,
    color: '#888',
    fontWeight: 'bold',
    margin: 15,
  },
});

export default Gallery;
