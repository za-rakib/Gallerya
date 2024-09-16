/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../features/counters/countersSlice';
import {fetchPosts} from '../features/posts/postsSlice';

const Redux = () => {
  const counters = useSelector(state => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const {error, isError, isLoading, posts} = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = (
      <View>
        <Text style={styles.loadingText}>Loading....</Text>
      </View>
    );
  }
  if (!isLoading && isError) {
    content = (
      <View>
        <Text style={styles.loadingText}>{error}</Text>
      </View>
    );
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = (
      <View>
        <Text style={styles.loadingText}>No Post Found</Text>
      </View>
    );
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ScrollView>
        {posts.map(post => (
          <Text key={post.id} style={styles.mainText}>
            {post.title}
          </Text>
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Redux Counter</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{counters[0].value}</Text>

        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1C1C1E',
    padding: 20,
  },
  headerText: {
    color: '#FFD700',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  counterContainer: {
    height: 150,
    width: '100%',
    backgroundColor: '#333',
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    color: '#FFD700',
    fontSize: 32,
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#FFD700',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  mainText: {
    color: '#FFD700',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Redux;
