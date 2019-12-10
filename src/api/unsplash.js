import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e8003296245dd5b29009d5c12f58530d5801877044c99710f93bf317d604965c'
  }
});