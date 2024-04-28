import React from 'react';

const AuthLayout = (props) => {
  const { children, paragraf } = props;
  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/assets/images/bg-login.png')"}}>
      <div className="flex items-center mx-20 h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
