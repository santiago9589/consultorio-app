import { modelAppointment } from "./model"


export const getAppointment = async (id:string) => {

    try {
        const response = await  modelAppointment.findById(id)
        return response

    } catch (error) {
        return error
    }
}

export const updateAppointment = async (id:string ,state:boolean) => {

    try {
        const response = await modelAppointment.findByIdAndUpdate(id,{
           state
        })
        return response

    } catch (error) {
        return error
    }
}

export const getAppointments = async () => {

    try {
        const response = await modelAppointment.find()
        return response

    } catch (error) {
        return error
    }
}