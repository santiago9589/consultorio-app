import Express, { Request, Response } from "express"
import { succesResponse, failResponse } from "../../main/response"
import { getSpeciality,getSpecialitys,updateSpeciality } from "./controller"

export const specialityRoutes = Express.Router()


specialityRoutes.put("/:id", async (req: Request, res: Response) => {

    const id = req.params.id
    const {doctorName} = req.body

    if (!id || !doctorName) {
        failResponse(req, res, "datos invalidos", 400)
    }

    try {
        const response = await updateSpeciality(id,doctorName) 
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})

specialityRoutes.get("/:id", async (req: Request, res: Response) => {

    const id = req.params.id

    try {
        const response = await getSpeciality(id)
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})


specialityRoutes.get("/", async (req: Request, res: Response) => {

    try {
        const response = await getSpecialitys()
        succesResponse(req, res, response, 200)
    } catch (error) {
        failResponse(req, res, error.message, 400)
    }
})


