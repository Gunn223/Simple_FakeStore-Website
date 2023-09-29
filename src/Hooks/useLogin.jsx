import React, { useEffect, useState } from 'react';
import { decodedToken } from '../Services/Service-Produck';
import { getIdUser } from '../Services/Services-LoginAuth';

export const useLogin = () => {
  const [login, SetLogin] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      SetLogin(decodedToken(token));
    } else {
      window.location.href = '/login';
    }
  }, []);

  return login;
};

export const setIdUser = () => {
  const [id, setId] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setId(getIdUser(token));
    }
  }, []);

  return id;
};

export default useLogin;
