import axios from 'axios';

export const getDetailProduct = (data) => {
  axios
    .get('https://fakestoreapi.com/products?limit=3')
    .then((res) => {
      data(res.data);
    })
    .catch((err) => console.log(err));
};
