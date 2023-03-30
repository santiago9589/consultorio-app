import { modelPacients } from "./model"

export const addPacients = async (name: string, email: string, password: string) => {

    if (!name || !email || !password) {
        throw new Error("Datos invalidos")
    }

    try {
        const response = await modelPacients.create({
            name,
            email,
            password
        })

        await response.save()

        return response

    } catch (error) {
        return error
    }
}

export const getPacients = async () => {

    try {
        const response = await modelPacients.find().populate("consultas")
        return response

    } catch (error) {
        return error
    }
}

export const deletePacient = async (id:string) => {

    try {
        const response = await modelPacients.findByIdAndDelete(id)
        return response

    } catch (error) {
        return error
    }
}