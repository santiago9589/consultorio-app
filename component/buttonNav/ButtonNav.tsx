import React from "react"

interface props {
  name: string
}

const ButtonNav = ({ name}: props) => {
  return (
    <button className="border-2 border-blue-100 rounded-lg p-2 capitalize bg-blue-200 lg:text-lg md:text-xs">
      {name}
    </button>
  )
}

export default ButtonNav
