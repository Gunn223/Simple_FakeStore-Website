import React, { useEffect } from 'react';
import Jumbotron from '../Fragments/Jumbotron';
import { setIdUser } from '../../Hooks/useLogin';

const HomeLayout = () => {
  const id = setIdUser();

  useEffect(() => {
    localStorage.setItem('id', id);
  }, [id]);
  return (
    <div>
      <Jumbotron>
        <Jumbotron.Header>
          <Jumbotron.Body
            h1="Welcome to Our Store - Discover a World of Amazing Products and Unbeatable Deals"
            paragraf="text-white opacity-100">
            Welcome to our store! Discover a world of amazing products and unbeatable offers. Here, you will find a
            variety of quality goods at the best prices. Browse our collection and find your favorite product. Enjoy a
            fun and easy shopping experience at our store. Happy shopping!
          </Jumbotron.Body>
        </Jumbotron.Header>
      </Jumbotron>
    </div>
  );
};

export default HomeLayout;
