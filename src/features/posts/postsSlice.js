import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getPosts} from './postsAPI';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: '',
};
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postSlice.reducer;
