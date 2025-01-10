import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Utilisez l'API JSONPlaceholder
    if (!response.ok) {
      throw new Error('Erreur de la réponse');
    }
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Utilisez l'API JSONPlaceholder
    if (!response.ok) {
      throw new Error('Erreur de la réponse');
    }
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addPost = createAsyncThunk('posts/addPost', async (post, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Erreur de la réponse');
    }
    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
