import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Works because of your Vite proxy!
});

// Interceptor to add token to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

