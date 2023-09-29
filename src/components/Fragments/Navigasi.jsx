import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin, { setIdUser } from '../../Hooks/useLogin';
import twiter from '../../../public/assets/Icons/twitter.png';
import facebook from '../../../public/assets/Icons/facebook.png';
import instagram from '../../../public/assets/Icons/instagram.png';
const handleClickToId = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
const Navigasi = () => {
  const login = useLogin();

  // id object tidak dapat di gunakan dalam paragraf kecuali pada console log tampil baru username di login dapat digunakan

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('Cart');
    window.location.href = '/login';
  };
  return (
    <div>
      <nav className="fixed right-0 left-0 top-0">
        <div className="bg-sky-500 px-16 font-semibold text-white flex justify-between items-center">
          <div className="flex gap-5">
            <a
              onClick={handleLogout}
              className=" text-red-500 cursor-pointer hover:text-red-600">
              Logout
            </a>
            <p>user: {login}</p>
          </div>
          <ul className="flex justify-end gap-5 ">
            <Link to="/">
              <li className="p-5 hover:bg-sky-700">Home</li>
            </Link>
            <Link to="/cart">
              <li className="p-5 hover:bg-sky-700">Cart</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const FooterMain = () => {
  return (
    <div className="w-full bg-sky-700 mt-16 ">
      <div className="flex items-center gap-5 flex-col p-2">
        <h1 className="uppercase text-2xl font-semibold text-white">Folow On Social Media</h1>
        <div className="flex max-w-sm gap-5">
          <div className="w-12 h-12 border p-1 rounded-full overflow-hidden saturate-0 hover:saturate-100 transition-all duration-300">
            <img
              src={twiter}
              alt=""
            />
          </div>
          <div className="w-12 h-12 border p-1 rounded-full overflow-hidden saturate-0 hover:saturate-100 transition-all duration-300">
            <img
              src={facebook}
              alt=""
            />
          </div>
          <div className="w-12 h-12 border p-1 rounded-full overflow-hidden saturate-0 hover:saturate-100 transition-all duration-300">
            <img
              src={instagram}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex px-10 gap-10">
        <div className="w-1/3 p-3">
          <h1 className="text-3xl mb-2 font-bold italic">Fake Store</h1>
          <p className="text-md italic leading-relaxed">
            We are the ultimate destination for those seeking style and comfort in fashion. With collections that range
            from classic styles to modern trends, we offer high-quality clothing that defines your personality.
          </p>
        </div>
        <div className="grow flex items-center py-4">
          <div className="flex gap-40 ">
            <div>
              <h1 className="text-3xl font-semibold">Links</h1>
              <ul className="leading-7 mt-3">
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 1</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 2</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 3</li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Links</h1>
              <ul className="leading-7 mt-3">
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 1</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 2</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 3</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 4</li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Links</h1>
              <ul className="leading-7 mt-3">
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 1</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 2</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 3</li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Links</h1>
              <ul className="leading-7 mt-3">
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 1</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 2</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 3</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 4</li>
                <li className="text-lg text-white hover:text-sky-500 cursor-pointer">item 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-slate-800 p-3 text-white font-bold">
        <p className="text-md opacity-60">Design By Admin</p>
      </div>
    </div>
  );
};
Navigasi.FooterMain = FooterMain;

export default Navigasi;
