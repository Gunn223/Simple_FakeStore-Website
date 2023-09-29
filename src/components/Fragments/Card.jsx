import React from 'react';
import Button from '../Elements/Button/Button';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { children } = props;
  return <div className="w-[250px] border rounded-md ">{children}</div>;
};
const HeaderCard = (props) => {
  const { image, id, imagesize } = props;
  return (
    <div className={`flex justify-center h-40 overflow-hidden ${imagesize}`}>
      <div className="flex justify-center items-start  flex-col w-3/4 ">
        <Link
          to={`/detailproduct/${id}`}
          className={`w-40 ${imagesize}`}>
          <img
            className="w-full bg-center bg-cover p-8"
            src={image}
            alt="fake img"
          />
        </Link>
      </div>
    </div>
  );
};
const BodyCard = (props) => {
  const { deskripsi, kategori, title } = props;
  return (
    <div className="mt-2 px-3 bg-slate-300">
      <div className="pt-5 ">
        <h1 className="text-2xl font-semibold">{title.substring(0, 12)}...</h1>
        <p className="text-sm opacity-60">{kategori}</p>
      </div>
      <div className="mt-2">
        <p>{deskripsi.substring(0, 20)}...</p>
      </div>
    </div>
  );
};
const FooterCard = (props) => {
  const { price, id, onClick } = props;
  return (
    <div className="px-3 pb-3 w-full bg-slate-300">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-red-700">$ {price}</h3>
      </div>
      <div className="flex justify-center gap-10 mt-5">
        <Link
          className=" rounded-xl flex justify-center items-center font-semibold py-1 border bg-sky-500   px-3 hover:bg-sky-600 text-white"
          to={`/detailproduct/${id}`}>
          Detail
        </Link>
      </div>
    </div>
  );
};
Card.HeaderCard = HeaderCard;
Card.BodyCard = BodyCard;
Card.FooterCard = FooterCard;
export default Card;
