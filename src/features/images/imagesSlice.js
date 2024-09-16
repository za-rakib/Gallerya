import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getImages} from './imageAPI';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async ({album}) => {
    const images = await getImages(album);
    return images;
  },
);

const initialState = {
  images: [],
  loading: false,
  error: null,
  hasMore: true,
  searchTerm: '',
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        // Append new images to the existing array
        if (action.payload.length === 0) {
          state.hasMore = false; // No more images in the next album
        } else {
          state.images = [...state.images, ...action.payload];
        }
        state.loading = false;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.error = action.error?.message;
        state.loading = false;
      });
  },
});

export const {setSearchTerm} = imagesSlice.actions;
export default imagesSlice.reducer;
