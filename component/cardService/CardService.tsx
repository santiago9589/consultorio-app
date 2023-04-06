import React from 'react'
import { ServicesProps } from "../../src/servicios"

const CardService = ({ title, imagen }: ServicesProps) => {
    return (
        <section className='mx-2 box-border shadow-lg shadow-blue-200 border-2 w-52 h-60 rounded-lg grid grid-rows-4 grid-cols-4'>
        <h2 className='row-span-1 col-span-4 text-center mt-4 text-lg'>{title}</h2>
        <section className='row-start-2 row-end-4 col-span-4'>
          <img src={imagen} className='h-full w-full' />
        </section>
        <section className='col-span-4 row-span-1 flex justify-center items-center'>
          <button className='p-2 bg-blue-200 border-2 rounded-lg'>agendar turno</button>
        </section>
      </section>
    )
}

export default CardService
