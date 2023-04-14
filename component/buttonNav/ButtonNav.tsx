import React from 'react'

interface props {
  route: string
  funcionPath: (url: string) => void
}

const ButtonNav = ({ route,funcionPath }: props) => {
  return (
    <button onClick={()=>funcionPath }className='border-2 border-blue-100 rounded-lg p-2 capitalize bg-blue-200 lg:text-lg md:text-xs'>
      {route}
    </button>
  )
}

export default ButtonNav
