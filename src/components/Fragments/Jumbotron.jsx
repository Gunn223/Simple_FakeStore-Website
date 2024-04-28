import React from 'react';
import { handleViewAll } from '../../../public/assets/js/eventFunc';
import Button from '../Elements/Button/Button';

// buat button untuk jelajah keid yang di tentukan
const Jumbotron = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
const Header = (props) => {
  const { children } = props;
  return (
    <>
    <div className="min-h-screen flex p-10 items-center bg-cover bg-no-repeat bg-center bg-[url('/assets/images/bg-jumbotron.png')]">
       {children}
     </div>

    </>
  );
};
const Body = (props) => {
  const { children, h1, width = 'w-1/2', paragraf } = props;
  return (
    <div className={width}>
      <div className="flex flex-col gap-8 text-shadow-md w-full">
        <h1 className={`text-6xl font-semibold ${paragraf} bitter text-white leading-tight`}>{h1}</h1>
        <p className={`text-md  opacity-80 text-white ${paragraf} w-3/4`}>{children}</p>
        <button className="w-32 py-2 rounded-tl-xl font-semibold text-lg bg-blue-500 hover:bg-blue-800 rounded-sm  text-white" onClick={()=> handleViewAll('favorite_products')}>
          Discover More
        </button>
      </div>
    </div>
  );
};

Jumbotron.Header = Header;
Jumbotron.Body = Body;
export default Jumbotron;
