import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
