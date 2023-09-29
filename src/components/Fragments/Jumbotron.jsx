import React from 'react';
import Button from '../Elements/Button/Button';

// buat button untuk jelajah keid yang di tentukan
const Jumbotron = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
const Header = (props) => {
  const { children } = props;
  return (
    <div className=" min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]">
      {children}
    </div>
  );
};
const Body = (props) => {
  const { children, h1, width = 'w-1/2', paragraf } = props;
  return (
    <div className={width}>
      <div className="flex flex-col gap-5 text-shadow-md">
        <h1 className={`text-4xl font-semibold ${paragraf}`}>{h1}</h1>
        <p className={`text-md opacity-80 leading-5 ${paragraf} `}>{children}</p>
        <Button className="px-4 py-2 rounded-tl-xl font-semibold text-lg bg-blue-500 hover:bg-blue-800">
          Jelahjah
        </Button>
      </div>
    </div>
  );
};

Jumbotron.Header = Header;
Jumbotron.Body = Body;
export default Jumbotron;
