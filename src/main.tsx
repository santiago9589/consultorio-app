import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navbar from "./../component/navbar/Navbar"
import Footer from "./../component/footer/Footer"
import ServiciosPage from "./servicios"
import ProfesionalesPage from "./profesionales"
import QuienesSomosPage from "./quienessomos"
import ContactsUsPage from "./contactanos"
import App from "./App"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <React.StrictMode>
    <main className=" shadow-xl shadow-blue-100  bg-[url(src/assets/26358.jpg)] bg-no-repeat  bg-left lg:bg-center   bg-cover grid grid-cols-5 grid-rows-5 lg:grid-cols-6 lg:grid-rows-6 
     w-full h-screen container mx-auto">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/servicios" element={<ServiciosPage/>}/>
            <Route path="/doctores" element={<ProfesionalesPage/>}/>
            <Route  path="/quienessomos" element={<QuienesSomosPage/>}/>
            <Route  path="/contactus" element={<ContactsUsPage/>}/>
            <Route  path="/" element={<App/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  </React.StrictMode>,
)
