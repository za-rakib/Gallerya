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
import {useDispatch, useSelector} from 'react-redux';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';
import {fetchImages} from '../features/images/imagesSlice';

const Gallery = () => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const [album, setAlbum] = useState(1); // State to track current album

  const calculateNumColumns = () => {
    const cardSize = 120;
    const margin = 10;
    return Math.floor(width / (cardSize + margin * 2));
  };

  const {error, isLoading, images, hasMore} = useSelector(
    state => state.images,
  );

  useEffect(() => {
    dispatch(fetchImages({album}));
  }, [dispatch, album]);

  const loadMoreImages = () => {
    if (!isLoading && hasMore) {
      setAlbum(prevAlbum => prevAlbum + 1);
    }
  };

  const renderItem = ({item}) => <ImageCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#232323" />
      <SearchBar />
      <Text style={styles.title}>Image Gallery</Text>

      <View style={styles.listContainer}>
        {error && !isLoading && <Text style={styles.errorText}>{error}</Text>}

        {isLoading && images.length === 0 && (
          <ActivityIndicator size="large" color="#ff004c" />
        )}

        {!error && !isLoading && images.length > 0 && (
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={calculateNumColumns()}
            onEndReached={loadMoreImages}
            onEndReachedThreshold={0.1} // Adjust this value if needed
            ListFooterComponent={
              isLoading &&
              images.length > 0 && (
                <View style={{padding: 20}}>
                  <ActivityIndicator size="small" color="#ff004c" />
                </View>
              )
            }
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  listContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Gallery;
