import {configureStore} from '@reduxjs/toolkit';
import imagesReducers from '../features/images/imagesSlice';

const store = configureStore({
  reducer: {
    images: imagesReducers,
  },
});

export default store;
