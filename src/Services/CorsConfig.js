const axios = require('axios');

const apiUrl = 'https://fakestoreapi.com/products';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

const finalUrl = `${corsAnywhereUrl}${apiUrl}`;

export const config = {
  method: 'get',
  url: finalUrl,
  headers: {
    Origin: 'http://localhost:5173',
  },
};
