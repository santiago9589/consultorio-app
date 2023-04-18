import React from 'react'
import gastro from "./assets/gastro.png"
import clinico from "./assets/previewpaint.jpg"
import oftalmologia from "./assets/oftalmologia.jpg"
import cardiologia from "./assets/cardiologia.jpg"


export interface WhoAreWeProps {
  title: string
  imagen: string
  content?: string
}

const WhoAreWePage = () => {

  const arrayInfo: WhoAreWeProps[] = [{
    title: "Historia",
    imagen: gastro,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic perspiciatis inventore laudantium, fuga rerum at expedita officia non repellendus dignissimos nisi voluptatibus atque in est? Sed assumenda asperiores quisquam"
  },
  {
    title: "Vision",
    imagen: clinico,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic perspiciatis inventore laudantium, fuga rerum at expedita officia non repellendus dignissimos nisi voluptatibus atque in est? Sed assumenda asperiores quisquam"
  },
  {
    title: "Mision",
    imagen: oftalmologia,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic perspiciatis inventore laudantium, fuga rerum at expedita officia non repellendus dignissimos nisi voluptatibus atque in est? Sed assumenda asperiores quisquam"
  },
  {
    title: "Proyectos",
    imagen: cardiologia,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic perspiciatis inventore laudantium, fuga rerum at expedita officia non repellendus dignissimos nisi voluptatibus atque in est? Sed assumenda asperiores quisquam"
  }]

  return (
    <section className='shadow-lg  p-2 gap-4 col-start-2 col-span-4 row-span-4  lg:col-span-6   justify-between lg:row-span-4 flex  items-start flex-wrap overflow-y-auto'>

      {arrayInfo.map((info) => {
        return (
          <section className='w-3/4 mx-auto rounded-lg shadow-lg h-full flex flex-col justify-between items-center p-2'>
            <h2 className='text-2xl font-bold capitalize'>{info.title}</h2>
            <p className='text-justify'>{info.content}</p>
            <section className='w-full h-1/3'>
              <img className='h-full w-full'
                src={info.imagen} alt="imagen-somos" />
            </section>
          </section>
        )
      })}
    </section>
  )
}

export default WhoAreWePage
