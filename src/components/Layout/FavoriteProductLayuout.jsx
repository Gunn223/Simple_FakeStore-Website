import React, { useEffect, useState } from 'react';
import Card from '../Fragments/Card';
import { getDetailProduct } from '../../Services/Services-Detail-Product';

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
    }).then((willDelete) => {
      if (willDelete) {
        swal('Success', {
          icon: 'success',
        });
      }
    });
  };
  return (
    <>
      <h1 className="text-2xl text-center font-semibold mt-10">Popular Product</h1>
      <div className="flex flex-col justify-center gap-10 ">
        <div className=" flex mt-8 justify-center gap-28">
          {favoriteProduct.length > 0 &&
            favoriteProduct.map((product) => (
              <Card key={product.id}>
                <Card.HeaderCard
                  image={product.image}
                  id={product.id}
                />
                <Card.BodyCard
                  deskripsi={product.description}
                  title={product.title}
                  kategori={product.category}
                />
                <Card.FooterCard
                  price={product.price}
                  id={product.id}
                //  bug button beli
                />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteProductLayuout;
