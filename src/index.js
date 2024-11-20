import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/home',
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

