import { Schema, model } from "mongoose"


const newModel = new Schema({
    name: {
        type: String,
        require: true
    },
    appointment: [
        { type: Schema.Types.ObjectId, ref: "Appointment" }
    ],
    email: {
        type: String,
        require: true
    }
})

export const modelPacients = model("Pacients", newModel)