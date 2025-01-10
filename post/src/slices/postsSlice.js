// slices/postsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostById, addPost } from '../slices/actions/postsActions';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    addedPosts: [],
    status: 'idle',
    error: null,
    selectedPost: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.addedPosts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
