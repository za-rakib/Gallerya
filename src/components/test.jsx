import React, {useEffect, useCallback, useState} from 'react';
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
import {fetchImages} from '../features/images/imagesSlice';

const Gallery = () => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();

  const {images, loading, error, page, hasMore} = useSelector(
    state => state.images,
  );

  // Calculate number of columns based on screen width
  const calculateNumColumns = () => {
    const cardSize = 120;
    const margin = 10;
    return Math.floor(width / (cardSize + margin * 2));
  };

  // Initial load
  useEffect(() => {
    dispatch(fetchImages({album: 1}));
  }, [dispatch]);

  // Load more images when user scrolls to the bottom
  const loadMoreImages = () => {
    if (!loading && hasMore) {
      dispatch(fetchImages({album: 1}));
    }
  };

  const renderItem = useCallback(({item}) => {
    return <ImageCard item={item} />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#232323" />
      <Text style={styles.idText}>Image Gallery</Text>
      <View>
        {loading && page === 1 && (
          <ActivityIndicator size="large" color="#ff004c" />
        )}
        {!loading && error && <Text>{error}</Text>}
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={calculateNumColumns()}
          onEndReached={loadMoreImages}
          onEndReachedThreshold={0.5} // Trigger when the user scrolls 50% from the bottom
          ListFooterComponent={
            loading && page > 1 ? (
              <ActivityIndicator size="small" color="#ff004c" />
            ) : null
          } // Show spinner when loading more images
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginBottom: 20,
  },
  idText: {
    fontSize: 25,
    color: '#888',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 15,
  },
});

export default Gallery;
