import React, { useEffect, useState } from 'react';
import CardCart from '../Fragments/CardCart';
import Button from '../Elements/Button/Button';
import Navigasi from '../Fragments/Navigasi';
import { getDetailProduct } from '../../Services/Service-Produck';
import swal from 'sweetalert';

const CartLayout = () => {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalprice] = useState([]);
  const getProduct = JSON.parse(localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];

  useEffect(() => {
    // buat kondisi ketika data 0 maka jgn di tampilkan
    if (getProduct.length > 0) {
      // Inisialisasi array untuk menampung produk dengan detail
      const productsWithDetail = [];
      // Loop melalui setiap produk dalam getProduct
      getProduct.forEach((item) => {
        getDetailProduct(item.idbarang, (data) => {
          // Gabungkan detail produk dengan informasi produk
          const productWithDetail = {
            ...item,
            detail: data,
          };
          // Tambahkan produk dengan detail ke dalam array
          productsWithDetail.push(productWithDetail);

          // Jika semua detail produk telah diambil, atur state product
          if (productsWithDetail.length === getProduct.length) {
            setProduct(productsWithDetail);
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const sum = product.reduce((acc, item) => {
        const hasProduct = product.find((product) => product.idbarang === item.detail.id);

        return acc + hasProduct.detail.price * hasProduct.cart;
      }, 0);
      setTotalprice(sum);
    }
  }, [product]);
  const handleBuyProduct = () => {
    const confirm = window.confirm('Apakah Anda Yakin Ingin Membeli ?');
    if (confirm) {
      swal('Berhasil', 'Terimakasih Telah Membeli', 'success');
      localStorage.removeItem('Cart');
      setTimeout(() => {
        window.location.reload(true);
      }, 2000);
    } else {
      window.location.reload(true);
    }
  };
  return (
    <>
      <Navigasi />
      <div className="w-full my-20">
        <div className="flex flex-col gap-6">
          {product.length > 0 &&
            product.map((item) => (
              <CardCart
                key={item.detail.id}
                price={item.detail.price}
                title={item.detail.title}
                imgSrc={item.detail.image}
                total={item.cart}
              />
            ))}
          {product.length <= 0 && (
            <h1 className="text-center mt-72 text-3xl font-bold opacity-60">Mulai belanja Yukk!</h1>
          )}
        </div>

        <div className="w-full bg-sky-500 fixed bottom-0 flex justify-end gap-5 px-20 p-2">
          {product.length > 0 && (
            <span>
              <p className="text-lg font-semibold text-white">Total({product.length} produk):</p>
              <h1 className="text-xl font-semibold text-white">$ {totalPrice}</h1>
            </span>
          )}
          <Button
            disabled={product.length <= 0}
            className="px-8 py-2 font-semibold rounded-md bg-green-800 hover:bg-emerald-700"
            onClick={handleBuyProduct}>
            Beli
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartLayout;
