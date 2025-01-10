import { createSlice } from '@reduxjs/toolkit';
import { fetchComments, addComment } from '../slices/actions/commentsActions';

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
