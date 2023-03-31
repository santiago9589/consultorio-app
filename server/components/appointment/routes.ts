import Express, { Request, Response } from "express"
import { succesResponse, failResponse } from "../../main/response"
import { updateAppointment,getAppointment, getAppointments } from "./controller"

export const appointmentRoute = Express.Router()


appointmentRoute.put("/:id", async (req: Request, res: Response) => {

    const id = req.params.id
    const {state} = req.body

    try {
        const response = await updateAppointment(id,state) 
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})

appointmentRoute.get("/:id", async (req: Request, res: Response) => {

    const id = req.params.id

    try {
        const response = await getAppointment(id)
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})


appointmentRoute.get("/", async (req: Request, res: Response) => {

    try {
        const response = await getAppointments()
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})


