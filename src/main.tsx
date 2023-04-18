import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./../component/router/router"
import Navbar from "./../component/navbar/Navbar"
import Footer from "./../component/footer/Footer"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <main className=' shadow-xl shadow-blue-100  bg-[url(src/assets/26358.jpg)] bg-no-repeat  bg-left lg:bg-center   bg-cover grid grid-cols-5 grid-rows-5 lg:grid-cols-6 lg:grid-rows-6 
     w-full h-screen container mx-auto'>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </main>
  </React.StrictMode>,
)
