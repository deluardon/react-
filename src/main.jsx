import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Statistics from './Statistics/Statistics';
import Jobs from './Jobs/Jobs';
import Appling from './Appling/Appling';
import Error from './Error/Error';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/applying",
        element:<Appling></Appling>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/jobs",
        element:<Jobs></Jobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
