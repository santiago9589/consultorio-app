import { Schema, model } from "mongoose"


const newModel = new Schema({
    speciality: {
        type: String,
        require: true
    },
    doctorName: {
        type: String,
        require: true
    },
    pacients: [
        { type: Schema.Types.ObjectId, ref: "Pacients" }
    ],
    appointment: [
        { type: Schema.Types.ObjectId, ref: "Appointment" }
    ],
    
})

export const modelSpeciality = model("Speciality", newModel)