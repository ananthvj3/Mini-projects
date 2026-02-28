import React from 'react'
import { Children, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Todolist from './todolist/Todolist'
import Weather from './weather/Weather'
import Calculator from './Calculator'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path:'/todolist',
          element:<Todolist/>
        },
        {
          path:"/weather",
          element:<Weather/>
        },
        {
          path:"/calculator",
          element:<Calculator/>
        }
      ]
    }
  ])
 return( 
  <>
  <RouterProvider router={router} />
  </>
)

 
}


export default App
