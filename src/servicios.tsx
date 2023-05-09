import React from "react"
import gastro from "./assets/gastro.png"
import clinico from "./assets/previewpaint.jpg"
import oftalmologia from "./assets/oftalmologia.jpg"
import cardiologia from "./assets/cardiologia.jpg"
import CardService from "../component/cardService/CardService"

export interface ServiciosProps {
  title: string
  imagen: string
  handleClick?: () => void
  content?: string
}

const ServiciosPage = () => {

  const services: ServiciosProps[] = [{
    title: "Gastro",
    imagen: gastro
  },
  {
    title: "Clinico",
    imagen: clinico
  },
  {
    title: "Oftalmologia",
    imagen: oftalmologia
  },
  {
    title: "Cardiologia",
    imagen: cardiologia
  }]

  return (
    <section className="border-2 shadow-lg  p-2 gap-2 col-start-2 col-span-4 row-span-4  lg:col-span-6  lg:row-span-4 flex  items-start flex-wrap overflow-y-auto">
        
      {services.map((service,index)=>{
        return(
          <CardService key={index} title={service.title} imagen={service.imagen}/>
        )
      })}
    </section>
  )
}

export default ServiciosPage
