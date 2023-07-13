import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer MQ.lMYaT6l6DwB25u0PrdGBW9IyRsN_8Krg0c0RvAQLKukshZ6GAJT-0iU61DbH',
  },
});
