import React from 'react';
import Navigasi from '../components/Fragments/Navigasi';
import HomeLayout from '../components/Layout/HomeLayout';
import FavoriteProductLayuout from '../components/Layout/FavoriteProductLayuout';
import ProductLayout from '../components/Layout/ProductLayout';

const HomePages = () => {
  return (
    <div>
      <Navigasi />
      <HomeLayout />
      <FavoriteProductLayuout/>
      <ProductLayout/>
      <Navigasi.FooterMain/>
    </div>
  );
};

export default HomePages;
