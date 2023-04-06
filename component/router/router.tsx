import React from "react"
import { createBrowserRouter} from "react-router-dom"
import ServicesPage from "../../src/servicios"
import HomePage from "../../src/App"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/servicios",
        element:<ServicesPage/>
    }
])