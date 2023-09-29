import React from 'react';

const AuthLayout = (props) => {
  const { children, paragraf } = props;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-1/3 border-2 shadow-sm border-separate mx-auto">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
