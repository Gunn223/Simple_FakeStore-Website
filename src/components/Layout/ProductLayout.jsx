import React, { useEffect, useState } from 'react';
import Card from '../Fragments/Card';
import { getProducts } from '../../Services/Service-Produck';
import Navigasi from '../Fragments/Navigasi';
import useLogin from '../../Hooks/useLogin';

const ProductLayout = () => {
  const [products, setProducts] = useState([]);

  const login = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navigasi />

      <div className="w-full mx-auto flex flex-col items-center mt-16">
        <h1
          className="text center text-3xl font-semibold mb-10"
          id="allproducts">
          All Product
        </h1>

        <div className="flex flex-wrap gap-10 justify-center">
          {products.length > 0 &&
            products.map((product) => (
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
                />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
