import React from "react"
import { createBrowserRouter} from "react-router-dom"
import ContactPage from "../../src/contact"
import HomePage from "../../src/App"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/contact",
        element:<ContactPage/>
    }
])