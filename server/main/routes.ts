import {pacientsRoutes} from "../components/pacients/routes"
import { Express } from "express"


export const serverRoutes = (server:Express) =>{
    server.use("/pacients",pacientsRoutes)
}