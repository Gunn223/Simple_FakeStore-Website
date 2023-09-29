import React, { useEffect, useState } from 'react';
import Input from '../Elements/Input/Input';
import Label from '../Elements/Label/Label';
import Button from '../Elements/Button/Button';
import { LoginAuth } from '../../Services/Services-LoginAuth';
import { setIdUser } from '../../Hooks/useLogin';
const LoginLayout = () => {
  const [Login, SetLogin] = useState('');
  
  
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    LoginAuth(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);

        window.location.href = '/';
      } else {
        SetLogin(res.response.data);
      }
    });
  };

  return (
    <div className="pb-5">
      <img
        src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.2.1820924258.1689604525&semt=sph"
        alt="userIcon"
        className="w-1/4 mx-auto "
      />
      <h1 className="text-center text-2xl font-semibold">Welcome Back</h1>
      <p className="text-center opacity-60 mb-5">Login Akun Dahulu</p>
      <div className="flex justify-center flex-col items-center">
        <form onSubmit={handleLogin}>
          <Input
            username="username"
            id="username"
            type="text"
            placeholder="Username"
            className="w-full rounded-xl mb-5"
          />

          <Input
            username="password"
            id="password"
            type="password"
            placeholder="password"
            className="w-full rounded-xl"
          />
          <p className="text-red-500 ">{Login}</p>
          <Button className="mt-5 px-6 py-2 rounded-xl hover:bg-sky-600">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginLayout;
