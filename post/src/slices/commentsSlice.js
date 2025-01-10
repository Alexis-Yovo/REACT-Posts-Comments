import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return response.data;
});

export const addComment = createAsyncThunk('comments/addComment', async (comment) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/comments', comment);
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;
