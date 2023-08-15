import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer MQ.-nNn6RQw3t_kP90PYdcZU4fGFOS83hhd5lpHycjqg9qLSGNp_hf5cGWYkfck',
  },
});
