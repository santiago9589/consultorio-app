import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./../component/router/router"
import logo from "./assets/previewpaint.jpg"
import ButtonNav from "../component/buttonNav/ButtonNav"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className=' shadow-xl shadow-blue-100  bg-[url(src/assets/26358.jpg)] bg-no-repeat  bg-left lg:bg-center   bg-cover grid grid-cols-5 grid-rows-5 lg:grid-cols-6 lg:grid-rows-6 
     w-full h-screen container mx-auto'>
      <nav className="col-span-1 row-span-4 lg:col-span-6 lg:row-span-1 flex justify-between items-center">
        <h1 className='p-2 text-2xl'>MEDICAL CLINICAL GROUP S.A</h1>
        <section className='flex space-x-12 '>
          <button  className='border-2 border-blue-100 rounded-lg p-2 uppercase bg-blue-200'>servicios</button>
          <button  className='border-2 border-blue-100 rounded-lg p-2 uppercase bg-blue-200'>quienes somos</button>
          <button  className='border-2 border-blue-100 rounded-lg p-2 uppercase bg-blue-200'>contactos</button>
          <button  className='border-2 border-blue-100 rounded-lg p-2 uppercase bg-blue-200'>profesionales</button>
        </section>
        <img src={logo} alt="logo" className='w-40 h-full' />
      </nav>
      <RouterProvider router={router} />
      <footer className="border-2 border-red-500 row-start-5 col-span-5 lg:row-start-6 lg:col-span-6">
        SSADFDS
      </footer>
    </main>
  </React.StrictMode>,
)
