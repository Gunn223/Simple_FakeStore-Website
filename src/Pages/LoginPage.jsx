import React from 'react';
import AuthLayout from '../components/Layout/AuthLayout';
import LoginLayout from '../components/Fragments/LoginLayout';

const LoginPage = () => {
  return (
    <div>
    <AuthLayout>
      <LoginLayout/>
    </AuthLayout>
    </div>
  );
};

export default LoginPage;
