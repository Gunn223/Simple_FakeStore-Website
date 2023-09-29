import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LoginPage from './Pages/LoginPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePages from './Pages/HomePages';
import Pages404 from './Pages/Pages404';
import DetailProductPage from './Pages/DetailProductPage';
import CartPage from './Pages/CartPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages />,
  },
  {
    path: '*',
    element: <Pages404 />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/detailproduct/:id',
    element: <DetailProductPage />,
  },
  {
    path: '/cart',
    element:<CartPage/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
