import React, { useEffect, useState } from 'react';
import Card from '../Fragments/Card';
import { getDetailProduct } from '../../Services/Services-Detail-Product';
import { Link } from 'react-router-dom';
import CardFavoriteProduct from '../Fragments/CardFavoriteProduct';
import { handleViewAll } from '../../../public/assets/js/eventFunc';

const FavoriteProductLayuout = () => {
  const [favoriteProduct, setFavoriteProduct] = useState([]);

  useEffect(() => {
    getDetailProduct((data) => {
      setFavoriteProduct(data);
    });
  }, []);

  const handleBuyProductFav = () => {
    swal({
      title: 'Are you sure?',
      text: `you want to buy this product?`,
      icon: 'warning',
      buttons: true,
    }).then((buy) => {
      if (buy) {
        swal('Success', {
          icon: 'success',
        });
      }
    });
  };

  return (
    <>
    <div className='h-[80vh]' id='favorite_products'> 

    <div className='flex justify-between mx-20 items-center'>
      <h1 className="text-4xl mt-10 bitter leading-normal font-bold">
        Your Deserve
        <span className='block '>
          Good Products
        </span>
      </h1>
      <div>
   

        <button className='bg-blue-500 text-white px-5 py-2 rounded-md flex items-center gap-2' onClick={()=> handleViewAll('products')}>
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 0 1 1 1v10a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 1.414-1.414L10 12.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 14V4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
        <div className=" flex mt-8 justify-center gap-32">
          {favoriteProduct.length > 0 &&
            favoriteProduct.map((product) => (
              <CardFavoriteProduct key={product.id} image={product.image} title={product.title} price={product.price} id={product.id} />
              ))}

      </div>
              </div>
    </>
  );
};

export default FavoriteProductLayuout;
