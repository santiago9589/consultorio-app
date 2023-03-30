import { Schema, model } from "mongoose"


const newModel = new Schema({
    name: {
        type: String,
        require: true
    },
    consultas: [
        { type: Schema.Types.ObjectId, ref: "Consulta" }
    ],
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },

})

export const modelPacients = model("Pacients", newModel)