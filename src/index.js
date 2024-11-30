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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

