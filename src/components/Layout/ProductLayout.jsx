import React, { useEffect, useState } from 'react';
import Card from '../Fragments/Card';
import { getProducts,getSpecificCategory } from '../../Services/Service-Produck';
import Navigasi from '../Fragments/Navigasi';
import useLogin from '../../Hooks/useLogin';

const ProductLayout = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const login = useLogin();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      getProducts((data) => {
        setProducts(data);
      });
    }, 2000);
  }, [setProducts]);

  const handleSearchProducts=async(event)=>{
    event.preventDefault()
    try {
     await getSpecificCategory(event.target.query.value,(result)=>{
      setProducts(result)
     })
      
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <Navigasi />

      <div className='flex justify-between mx-20 items-center my-5 mt-20' id='products'>
        <h1 className="text-4xl bitter leading-normal font-bold">
          All Products
        </h1>
        <form className="flex items-center" onSubmit={handleSearchProducts}>
          <input type="text" placeholder="Enter your search category" className="border border-gray-300 px-3 py-1 rounded-md mr-2" name='query' />
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-md">Search</button>
        </form>
      </div> 

      <div className="flex flex-wrap gap-10 justify-center">
    {isLoading ? (
      // Tampilkan pesan loading jika isLoading adalah true
      <div className='loader'></div>
    ) : products.length > 0 ? (
      // Jika data produk tersedia, map setiap produk ke dalam komponen Card
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
      ))
    ) : (
      // Tampilkan pesan jika tidak ada produk tersedia
      <div>Category tidak tersedia</div>
    )}
  </div>
    </>
  );
};

export default ProductLayout;
