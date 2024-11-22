import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

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
    path: '/contact',
    element: <Contact />
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

