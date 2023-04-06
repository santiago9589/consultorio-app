import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./../component/router/router"
import Navbar from '../component/layout/navbar'
import FooterComponent from '../component/layout/footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className='grid   grid-cols-5 grid-rows-5 lg:grid-cols-6 lg:grid-rows-6 bg-green-100
     w-full h-screen container mx-auto'>
      <nav className="border-2 border-red-500 col-span-1 row-span-4 lg:col-span-6 lg:row-span-1">
        SSADFDS
      </nav>
      <RouterProvider router={router} />
      <footer className="border-2 border-red-500 row-start-5 col-span-5 lg:row-start-6 lg:col-span-6">
        SSADFDS
      </footer>
    </main>
  </React.StrictMode>,
)
