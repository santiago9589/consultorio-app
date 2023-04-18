import React from "react"
import { createBrowserRouter} from "react-router-dom"
import ServicesPage from "../../src/servicios"
import HomePage from "../../src/App"
import WhoAreWePage from "../../src/quienessomos"
import DoctorsPage from "../../src/profesionales"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/servicios",
        element:<ServicesPage/>
    },
    {
        path:"/quienessomos",
        element:<WhoAreWePage/>
    },
    {
        path:"profesionales",
        element:<DoctorsPage/>
    }
])