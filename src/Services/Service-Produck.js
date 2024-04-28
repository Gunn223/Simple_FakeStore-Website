import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const getProducts = async (data) => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    data(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const decodedToken = (token) => {
  const decoded = jwtDecode(token);

  return decoded.user;
};

export const getDetailProduct = async (id, data) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    data(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const getSpecificCategory = async (query, data) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${query}`);
    data(res.data);
  } catch (error) {
    console.log(error);
  }
};
