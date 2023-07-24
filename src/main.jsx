import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import SingIn from './Login/SingIn'
import SingUp from './Login/SingUp'
import AuthProvider from './Provider/AuthProvider'
import Contact from './Contact/Contact'
const router=createBrowserRouter([

  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/singIn',
    element:<SingIn></SingIn>
  },
  {
    path:'singUp',
    element:<SingUp></SingUp>
  },
  {
    path:'contact',
    element:<Contact></Contact>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}>

</RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
