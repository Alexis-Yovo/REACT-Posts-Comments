import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const addPost = async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post);
  return response.data;
};
