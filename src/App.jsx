import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home1'
import Bloglist from './components/bloglist'
import User from './components/user'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/bloglist",
      element: <Bloglist/>,
    },
    {
      path: "/bloglist/:id",
      element: <User/>,
    }
  ])
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
