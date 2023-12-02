import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Photo from './Components/Photo/Photo.jsx';
import { Asteroids } from './Components/Asteroid/Asteroids.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Photo />,
  },
  {
    path: "ast",
    element: <Asteroids />,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)