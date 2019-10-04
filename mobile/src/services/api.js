import axios from 'axios';

const api = axios.create({
  // switch to your machine or localhost's IP
  baseURL: 'http://10.0.1.87:3333'
});

export default api;