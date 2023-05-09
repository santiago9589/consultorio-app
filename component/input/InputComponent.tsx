import React from "react"

interface props{
    type:string
    placeholder:string
    onChange:(e: React.ChangeEvent<any>)=> void
    value:string
    error:string
    touched:boolean
    name:string
}

const InputComponent = ({error,name,touched,...rest}:props) => {
    console.log(rest)
    return (
        <>
            <label className="capitalize text-xl" htmlFor={name}>{name}</label>
            <input
            className=" placeholder:bg-slate-200 rounded-lg" 
            name={name}
            {...rest}/>
            {error && touched && <div className="text-xl text-red-500">{error}</div>}
        </>
    )
}

export default InputComponent
