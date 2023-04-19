import React from 'react'

interface props{
    children:React.ReactNode
    handleSubmit:(e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const FormComponent = ({children,handleSubmit}:props) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default FormComponent
