import {pacientsRoutes} from "../components/pacients/routes"
import {specialityRoutes} from "../components/doctor/routes"
import {appointmentRoute} from "../components/appointment/routes"
import { Express } from "express"


export const serverRoutes = (server:Express) =>{
    server.use("/pacients",pacientsRoutes)
    server.use("/speciality",specialityRoutes)
    server.use("/appointment",appointmentRoute)
}