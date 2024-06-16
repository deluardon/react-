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
import Error from './Error/Error';
import Details from './Details/Details';
import JobsNav from './Jobs/JobsNav';
import Applingbtn from './Appling/Applingbtn';







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
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/applying",
        element:<Applingbtn></Applingbtn>
      },
      {
        path: "/jobs",
        element:<JobsNav></JobsNav>
      },
      {
        path: "/job/:id",
        element:<Details></Details>,
        loader:() => fetch('../../public/data/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
