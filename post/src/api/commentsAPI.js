import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchComments = async (postId) => {
  const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
  return response.data;
};

export const addComment = async (comment) => {
  const response = await axios.post(`${API_URL}/comments`, comment);
  return response.data;
};
