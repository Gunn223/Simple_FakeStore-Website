import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailProduct, getProducts } from '../../Services/Service-Produck';
import Button from '../Elements/Button/Button';
import Navigasi from '../Fragments/Navigasi';
import swal from 'sweetalert';
const DetailsProductLayout = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [dataCart, setDataCart] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setDetailProduct(data);
    });
  }, [id]);

  const getIdUser = parseInt(localStorage.getItem('id'));

  const handleAddCart = (e) => {
    e.preventDefault();
    swal('Berhasil', 'Berhasil ditambahkan ke keranjang', 'success');
    const idbarang = parseInt(id);

    if (dataCart.find((item) => item.idbarang === idbarang)) {
      setDataCart(dataCart.map((item) => (item.idbarang === idbarang ? { ...item, cart: item.cart + count } : item)));
    } else {
      setDataCart([...dataCart, { idbarang, cart: count, idUser: getIdUser }]);
    }
  };
  useEffect(() => {
    if (dataCart.length > 0) {
      localStorage.setItem('Cart', JSON.stringify(dataCart));
    }
  }, [dataCart]);
  useEffect(() => {
    setDataCart(JSON.parse(localStorage.getItem('Cart')) || []);
  }, []);

  return (
    <>
      <Navigasi />
      <div className="flex justify-center mt-40">
        <div className="w-1/2 border p-5">
          <div className="flex font-sans ">
            <div className="flex-none mt-10 w-52 h-72 relative  overflow-hidden">
              <img
                src={detailProduct.image}
                alt={detailProduct.title}
                className="absolute top-10 inset-0 w-56 h-56 p-2"
                loading="lazy"
              />
            </div>

            <form
              className="flex-auto p-6"
              onSubmit={handleAddCart}>
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">{detailProduct.title} </h1>
                <div className="text-lg font-semibold text-slate-500">$ {detailProduct.price}</div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">In stock</div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  <div className="w-24 border-2  rounded-full flex justify-between items-center">
                    <button
                      className="rounded-full px-0 py-0 w-8 h-8"
                      onClick={(e) => {
                        e.preventDefault();

                        setCount(count + 1);
                      }}>
                      +
                    </button>
                    <p>{count}</p>
                    <button
                      disabled={count === 0}
                      className="rounded-full px-0 py-0 w-8 h-8"
                      onClick={(e) => {
                        e.preventDefault();
                        setCount(count - 1);
                      }}>
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <Button
                    disabled={count === 0}
                    className="h-10 px-6 rounded-xl hover:text-black"
                    type="submit">
                    Add To Cart
                  </Button>
                </div>
              </div>
              <p className="text-sm text-slate-700">{detailProduct.description}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProductLayout;
