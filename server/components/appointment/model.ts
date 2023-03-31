import { Schema, model } from "mongoose"


const newModel = new Schema({
    state: {
        type: Boolean,
        require: true
    },
    createAt: {
        type: Date,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    specialist:{
        type: String,
        require: true
    },
})

export const modelAppointment= model("Appointment", newModel)