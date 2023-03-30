import Express, { Request, Response } from "express"
import { succesResponse, failResponse } from "../../main/response"
import { addPacients, deletePacient, getPacients } from "./controller"

export const pacientsRoutes = Express.Router()


pacientsRoutes.post("/", async (req: Request, res: Response) => {

    const {email,name,password} = req.body

    if (!name || !email || !password) {
        failResponse(req, res, "datos invalidos", 400)
    }

    try {
        const response = await addPacients(name,email,password) 
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})

pacientsRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const response = await getPacients()
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})

pacientsRoutes.delete("/:id", async (req: Request, res: Response) => {

    const {id} = req.params

    try {
        const response = await deletePacient(id)
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})

