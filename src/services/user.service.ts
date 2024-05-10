import { Request,Response } from "express";
import { User } from "../entities/user.entity";
import { Like } from "typeorm";

export const getAllUsersService = async (req:Request, res:Response)=>{
    const users = await User.find();
    if(users)
        return users;
    else 
        return 'no user found'
}


export const createUserService = async(req:Request,res:Response)=>{
    const {nom, prenom, email , password} = req.body;
    const newUser = await User.save({
        nom :nom,
        prenom:prenom,
        email:email,
        password:password
    })
    return newUser
}

export const getUserService = async(req:Request,res:Response)=>{
    const user_id : any = req.params.id;

    const user = await User.findOne({where:{id:user_id}})

    return user?.id ? user : 'user not found'
}

export const deleteUserService = async(req:Request,res:Response)=>{
    const id:any = req.params.id;
    const user_deleted = await User.find({where:{
        id:id
    }})
    if(user_deleted){
        await User.remove(user_deleted);
        return true;
    }else
        return 'user not found '
    
}

export const updateUserService = async (req: Request, res: Response) => {
    const id: any = req.params.id;
    const { nom, prenom, email, password } = req.body;

    // Check if any of the required fields are missing
    if (!id || !nom|| !prenom || !email || !password) {
        return 'Some data is missing';
    } else {
        // Check if a user with the given ID exists
        const userToUpdate = await User.findOne({ where: { id: id } });
        if (!userToUpdate) {
            return 'No user with this ID found';
        } else {
            // Update the user's information
            await User.update({ id: id }, { nom: nom, prenom: nom, email: email, password :password });

            // Log the data before sending the response
            return 'User information updated successfully';
        }
    }
};