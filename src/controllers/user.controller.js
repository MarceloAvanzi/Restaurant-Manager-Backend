import User from "../models/user.schema.js";

export default class UserController {

    static getAllUsers = async (req, res) => {
        res.send(await User.find())
    }
    
    static createUser = async (req, res) => {
        const body = {
            name: req.body.name,
            birthday: req.body.birthday,
            email: req.body.email
        }
    
        const user = await User.create({
            name: body.name,
            birthday: body.birthday,
            email: body.email
        })
    
        console.log('User created successfully ', user)
        res.send(user)
    }
}
