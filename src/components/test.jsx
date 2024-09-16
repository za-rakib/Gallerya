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
import {fetchImages, setSearchTerm} from '../features/images/imagesSlice';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';

const Gallery = () => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const [album, setAlbum] = useState(1);

  const calculateNumColumns = () => {
    const cardSize = 120;
    const margin = 10;
    return Math.floor(width / (cardSize + margin * 2));
  };

  const {error, isLoading, images, searchTerm} = useSelector(
    state => state.images,
  );

  useEffect(() => {
    dispatch(fetchImages({album: 1}));
    setAlbum(album + 1);
  }, [dispatch]);

  const loadMoreImages = () => {
    if (!isLoading) {
      dispatch(fetchImages({album: album + 1}));
    }
  };

  // Filter images based on the search term
  const filteredImages = images.filter(
    image =>
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.albumId.toString().includes(searchTerm),
  );

  const renderItem = ({item}) => <ImageCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#232323" />
      {/* Search bar for filtering images */}
      <SearchBar
        value={searchTerm}
        onChange={text => dispatch(setSearchTerm(text))}
        placeholder="Search by title or album"
      />
      <Text style={styles.idText}>Image Gallery</Text>
      <View>
        {!isLoading && error && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
        {isLoading && <ActivityIndicator size="large" color="#ff004c" />}
        <FlatList
          data={filteredImages}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={calculateNumColumns()}
          onEndReached={loadMoreImages}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoading &&
            filteredImages.length > 0 && (
              <ActivityIndicator size="small" color="#ff004c" />
            )
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  idText: {
    fontSize: 26,
    color: '#333',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
});

export default Gallery;
