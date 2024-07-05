import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login/Login.jsx';
import Register from './Components/Auth/Register/Register.jsx';
import AuthProvider from './Components/providers/AuthProvider.jsx';
import Products from './Components/Products/Products.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AddProducts from './Components/AddProducts/AddProducts.jsx';
import Details from './Components/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/gadget')
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: '/products',
        element: <Products/>,
        loader: () => fetch('http://localhost:5000/gadget')
      },
      {
        path: '/details/:id',
        element: <Details/>,
        loader: ({params}) => fetch(`http://localhost:5000/gadget/${params.id}`)
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/addProducts',
        element: <AddProducts/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
