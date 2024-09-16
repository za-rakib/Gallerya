import {configureStore} from '@reduxjs/toolkit';
import countersReducers from '../features/counters/countersSlice';
import postsReducers from '../features/posts/postsSlice';
import imagesReducers from '../features/images/imagesSlice';

const store = configureStore({
  reducer: {
    counters: countersReducers,
    posts: postsReducers,
    images: imagesReducers,
  },
});

export default store;
