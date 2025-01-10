import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
  const response = await axios.get(`/api/posts/${postId}/comments`);
  return response.data;
});

export const addComment = createAsyncThunk('comments/addComment', async (comment) => {
  const response = await axios.post('/api/comments', comment);
  return response.data;
});
