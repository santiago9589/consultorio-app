import React from 'react'
import logo from "../../src/assets/previewpaint.jpg"



const Navbar = () => {
  return (
    <nav className="col-span-1 row-span-4 lg:col-span-6 lg:row-span-1 flex justify-between items-center flex-col lg:flex-row">
        <h1 className='p-2 lg:text-2xl md:text-xl w-full text-center lg:w-fit'>MEDICAL CLINICAL GROUP S.A</h1>
        <section className='flex lg:space-x-12 space-y-4 lg:space-y-0 p-2 box-border flex-col lg:flex-row'>
          <button  className='border-2 border-blue-100 rounded-lg p-2 capitalize bg-blue-200 lg:text-lg md:text-xs' >servicios</button>
          <button  className='border-2 border-blue-100 rounded-lg p-2 capitalize bg-blue-200 lg:text-lg md:text-xs'>quienes somos</button>
          <button  className='border-2 border-blue-100 rounded-lg p-2 capitalize bg-blue-200 lg:text-lg md:text-xs'>contactos</button>
          <button  className='border-2 border-blue-100 rounded-lg p-2 capitalize bg-blue-200 lg:text-lg md:text-xs'>profesionales</button>
        </section>
        <img src={logo} alt="logo" className='lg:w-40 lg:h-full w-full h-32 lg:block' />
      </nav>
  )
}

export default Navbar
