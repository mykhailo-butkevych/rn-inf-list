import axios from 'axios';

export const axiosOrigin = axios.create({
  baseURL: 'https://list.ly/api/v4',
});

axiosOrigin.interceptors.response.use(
  res => res,
  error => {
    throw error.response;
  },
);
