import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/shop',
    element: <Index />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

