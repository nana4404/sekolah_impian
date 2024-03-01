import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SekolahPages from './pages/SekolahPages';
import NavbarComponent from './components/Navbar';
import DetailsPage from './pages/SekolahDetailsPage';
import FormPage from './pages/FormPage.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/sekolah_impian",
      element: <SekolahPages />
    },
    {
      path: "/details",
      element: <DetailsPage />
    },
    {
      path: "/addSekolah",
      element: <FormPage />
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
