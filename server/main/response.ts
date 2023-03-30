import { Request,Response } from "express"

export const succesResponse = (req:Request,res:Response,content:any,status:number) =>{
    return res.status(status).send(content)
}

export const failResponse = (req:Request,res:Response,error:string,status:number) =>{
    return res.status(status).send(error)
}