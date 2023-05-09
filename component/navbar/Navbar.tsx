import React from "react"
import logo from "../../src/assets/previewpaint.jpg"
import { Link } from "react-router-dom";
import ButtonNav from "../buttonNav/ButtonNav"

interface navbarLink {
    route: string
    name: string
}




const Navbar = () => {

    const navbarLinks = [
        {
            route: "/servicios",
            name: "servicios"
        },
        {
            route: "/doctores",
            name: "doctores"
        },
        {
            route: "/quienessomos",
            name: "quienes somos"
        },
        {
            route: "/contactus",
            name: "contactanos "
        },
        {
            route: "/",
            name: "home "
        },
    ]


    return (
        <nav className="col-span-1 row-span-4 lg:col-span-6 lg:row-span-1 flex justify-between items-center flex-col lg:flex-row">
            <h1 className="p-2 lg:text-2xl md:text-xl w-full text-center ">MEDICAL CLINICAL GROUP S.A</h1>
            <section className="flex lg:space-x-12 space-y-4 lg:space-y-0 p-2 box-border flex-col lg:flex-row ">
                {
                    navbarLinks.map((element) => {
                        return (
                            <>
                                <Link to={element.route}>
                                    <ButtonNav name={element.name}/>
                                </Link>
                            </>
                        )
                    })
                }
            </section>
            <img src={logo} alt="logo" className="lg:w-40 lg:h-full w-full h-32 " />
        </nav>
    )
}

export default Navbar
