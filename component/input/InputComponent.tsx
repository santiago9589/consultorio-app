import React from "react"

interface props{
    type:string
    placeholder:string
    handleChange:(e: React.ChangeEvent<any>)=> void
    value:string
    error:string
    touched:boolean
    name:string
}

const InputComponent = ({error,name,touched,...rest}:props) => {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input 
            name={name}
            {...rest}/>
            {error && touched && <div>{error}</div>}
        </>
    )
}

export default InputComponent
