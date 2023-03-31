import {  modelSpeciality } from "./model"


export const getSpeciality = async (id:string) => {

    try {
        const response = await  modelSpeciality.findById(id).populate(["appointment","pacients"])
        return response

    } catch (error) {
        return error
    }
}

export const updateSpeciality = async (id:string,doctorName:string) => {

    try {
        const response = await  modelSpeciality.findByIdAndUpdate(id,{
            doctorName
        })
        return response

    } catch (error) {
        return error
    }
}

export const getSpecialitys = async () => {

    try {
        const response = await  modelSpeciality.find().populate(["appointment","pacients"])
        return response

    } catch (error) {
        return error
    }
}