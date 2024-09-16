import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  SafeAreaView,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';
import {fetchImages} from '../features/images/imagesSlice';

const Gallery = () => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();

  const calculateNumColumns = () => {
    const cardSize = 120;
    const margin = 10;
    return Math.floor(width / (cardSize + margin * 2));
  };

  const {error, isLoading, images} = useSelector(state => state.images);

  useEffect(() => {
    dispatch(fetchImages({album: 1}));
  }, [dispatch]);

  const renderItem = ({item}) => <ImageCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#232323" />
      <SearchBar />
      <Text style={styles.idText}>Image Gallery</Text>
      <View>
        {!isLoading && error && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
        {isLoading && <ActivityIndicator size="large" color="#ff004c" />}
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={calculateNumColumns()}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
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
