import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Story from './pages/Story';
import EmailCheck from './pages/EmailCheck';
import ChangePassword from './pages/ChangePassword';
import ForgetPassword from './pages/ForgetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Index />
  },
  {
    path: '/story',
    element: <Story />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/product/:id',
    element: <ProductDetail/>
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/checkEmail',
    element: <EmailCheck />
  },
  {
    path: 'changePassword',
    element: <ChangePassword />
  },
  {
    path: 'forgetPassword',
    element: <ForgetPassword />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

