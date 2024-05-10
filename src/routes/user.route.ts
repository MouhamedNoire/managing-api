import express from "express";
import { allUsers,getUser,createUser,deleteUser,updateUser } from "../controllers/user.controller";
import { create_user_validator } from "../validations/user/create_user.validation";
export const userRoute = express.Router()

userRoute.get('/',allUsers)
userRoute.get('/:id',getUser)
userRoute.post('/',create_user_validator(),createUser)
userRoute.delete('/:id',deleteUser)
userRoute.put('/:id',create_user_validator(),updateUser)