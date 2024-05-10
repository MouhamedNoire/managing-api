import express from "express";
import { allUsers,getUser,createUser,deleteUser,updateUser } from "../controllers/user.controller";
export const userRoute = express.Router()

userRoute.get('/',allUsers)
userRoute.get('/:id',getUser)
userRoute.post('/',createUser)
userRoute.delete('/:id',deleteUser)
userRoute.put('/:id',updateUser)