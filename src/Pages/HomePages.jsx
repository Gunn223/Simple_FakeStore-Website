import React from 'react';
import Navigasi from '../components/Fragments/Navigasi';
import HomeLayout from '../components/Layout/HomeLayout';
import FavoriteProductLayuout from '../components/Layout/FavoriteProductLayuout';
import ProductLayout from '../components/Layout/ProductLayout';
import NewsProductLayout from '../components/Layout/NewsProductLayout';

const HomePages = () => {
  return (
    <div>
      <Navigasi />
      <HomeLayout />
      <FavoriteProductLayuout/>
      <NewsProductLayout/>
      <ProductLayout/>
      <Navigasi.FooterMain/>
    </div>
  );
};

export default HomePages;
