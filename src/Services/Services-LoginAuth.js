import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const LoginAuth = (data, callback) => {
  axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getIdUser = (token) => {
  const decoded = jwtDecode(token);

  return decoded.sub;
};
