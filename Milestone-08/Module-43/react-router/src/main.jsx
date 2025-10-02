import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <div className='text-center'>Welcome my the Home Page</div>
  },
  {
    path: "about",
    element: <div>Here is the about section in the company</div>
  },
  {
    path: "blogs",
    element: <h1>BLOGS here</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
