import React from 'react'

interface props{
    children:React.ReactNode
}

const ButtonNav = ({children}:props) => {
  return (
    <button className='bg-g'>
        {children}
    </button>
  )
}

export default ButtonNav
