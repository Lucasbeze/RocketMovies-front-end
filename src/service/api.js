import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketmovies-api-i0xk.onrender.com"
});