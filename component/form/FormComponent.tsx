import React from "react"

interface props {
  children: React.ReactNode
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const FormComponent = ({ children, handleSubmit }: props) => {
  return (
    <div className="box-border col-span-2 col-end-5 border-2 border-blue-50 shadow-lg rounded-lg lg:mx-auto mt-8 row-span-3 p-4 bg-white w-full">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full w-full">
        {children}
      </form>
    </div>
  )
}

export default FormComponent
