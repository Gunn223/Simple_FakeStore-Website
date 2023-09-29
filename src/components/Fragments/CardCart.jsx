import React from 'react';

const CardCart = (props) => {
  const { imgSrc, title, price, total, onSubmit } = props;

  return (
    <div className="w-full mb-3">
      <div className="flex  border w-1/3 p-2 mx-auto gap-5">
        <div className="w-32 h-36 flex  items-center overflow-hidden">
          <img
            className="w-24 bg-center bg-cover"
            src={imgSrc}
            alt="fake img"
          />
        </div>
        <div className="grow flex flex-col">
          <p>{title}</p>
          <p>$ {price}</p>
          <p className="border border-slate-400 rounded-lg w-8 flex justify-center">{total}</p>
          {/* <form
            action=""
            className="mt-2"
            onSubmit={() => onSubmit}>
            <input
              type="checkbox"
              id="check"
              className="mr-1"
            />
            <label htmlFor="check">Beli</label>
          </form> */}
          {/* tambahkan checkout untuk product ketika di checkout maka total akan sesuai barang yang dicheckout */}
        </div>
      </div>
    </div>
  );
};

export default CardCart;
