import { error } from 'console';
import {Request,Response} from 'express';
import { validationResult } from "express-validator";
import { getAllUsersService,getUserService,updateUserService,deleteUserService, createUserService} from '../services/user.service';
export const allUsers = async(req:Request, res:Response)=>{
    const result = await getAllUsersService(req,res);
    res.json(result);
}


export const getUser = async(req:Request, res:Response)=>{
    const result = await getUserService(req,res);
    res.json(result)
}

export const createUser = async (req:Request, res:Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({
            error:true,
            errors:errors.array(),
            message:'there are some validations errors'
        })
    }else{
        const result = await createUserService(req,res)
        res.json(result)
    }
}

export const deleteUser = async (req:Request, res:Response)=>{
    const result = await deleteUserService(req,res);
    if(result)
        res.status(201).json({message: 'user deleted'})
}

export const updateUser = async (req:Request, res:Response)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()})

        const result = await updateUserService(req,res)
        res.json(result)
    }catch(error){
        console.error('error updtated user', error);
        res.status(500).json({error:'internal server error'})
    }
}