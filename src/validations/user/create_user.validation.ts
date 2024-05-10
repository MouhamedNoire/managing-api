import { check } from "express-validator"

export const create_user_validator =()=>{
    return [
        check('nom').exists().withMessage('name is required').isLength({min:6, max:40}).withMessage('name should be beetween 5 and 40 characters'),
        check('prenom').exists().withMessage('prenom should exist'),
        check('email').exists().withMessage('email should exist').isEmail().withMessage('email should be an email'),
        check('password').exists().withMessage('password should not be empty')
    ]
}