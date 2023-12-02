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
import Mars from './Components/Mars/Mars.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Photo />,
  },
  {
    path: "ast",
    element: <Asteroids />,
  },
  {
    path: "mars",
    element: <Mars />,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)