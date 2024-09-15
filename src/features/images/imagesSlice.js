import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getImages} from './imageAPI';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async payload => {
    const images = await getImages(payload);
    return images;
  },
);

const initialState = {
  images: [],
  loading: false,
  error: null,
  searchTerm: '',
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteImage: (state, action) => {
      state.images = state.images.filter(image => image.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.images = action.payload;
        state.loading = false;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.error = action.error?.message;
        state.loading = false;
      });
  },
});

export const {setSearchTerm, deleteImage} = imagesSlice.actions;

export default imagesSlice.reducer;
