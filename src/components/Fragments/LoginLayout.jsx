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
        swal({
          title: "Login Successfull!",
          icon: "success",
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        SetLogin(res.response.data);
      }
    });
  };

  return (
  <div className='h-[55%] border-2 rounded-md border-separate w-[40%] bg-white shadow-md '>
      <h1 className="text-center text-5xl font-semibold mt-10 bitter">Login</h1>
    <div className="flex flex-col justify-center items-center h-2/3">
      <div className="flex w-full justify-center flex-col items-center">
        <form onSubmit={handleLogin} className=' w-3/4'>
          <div className="mb-5">
            <label htmlFor="username" >Username
            <span className='text-red-500'>*</span></label>
            <Input
              username="username"
              id="username"
              type="text"
              placeholder="Username"
              className="w-full rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="password" >Password
            <span className='text-red-500'>*</span></label>
            <Input
              username="password"
              id="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-xl"
            />
          </div>
          <p className="text-red-500 ">{Login}</p>
          <Button className="mt-5 px-6 py-2 rounded-xl hover:bg-sky-600 bg-sky-500">Login</Button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginLayout;
