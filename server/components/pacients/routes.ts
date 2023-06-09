import Express, { Request, Response } from "express"
import { succesResponse, failResponse } from "../../main/response"
import { updatePacient,getPacient, getPacients } from "./controller"

export const pacientsRoutes = Express.Router()


pacientsRoutes.put("/:id", async (req: Request, res: Response) => {

    const id = req.params.id
    const {email,name} = req.body

    if (!name || !email) {
        failResponse(req, res, "datos invalidos", 400)
    }

    try {
        const response = await updatePacient(id,name,email) 
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})

pacientsRoutes.get("/:id", async (req: Request, res: Response) => {

    const id = req.params.id

    try {
        const response = await getPacient(id)
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


