import React from "react"
import Navbar from "./navbar"
import FooterComponent from "./footer"

interface props {
    children: React.ReactNode
}

const LayoutComponent = ({ children }: props) => {
    return (
        <>
            
            <>
                {children}
            </>
            
        </>

    )
}

export default LayoutComponent