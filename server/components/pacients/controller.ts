import { modelPacients } from "./model"


export const getPacient = async (id:string) => {

    try {
        const response = await modelPacients.findById(id).populate("appointment")
        return response

    } catch (error) {
        return error
    }
}

export const updatePacient = async (id:string ,name:string,email:string) => {

    try {
        const response = await modelPacients.findByIdAndUpdate(id,{
            name,
            email
        })
        return response

    } catch (error) {
        return error
    }
}

export const getPacients = async () => {

    try {
        const response = await modelPacients.find().populate("appointment")
        return response

    } catch (error) {
        return error
    }
}