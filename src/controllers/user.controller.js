const User = require("../models/user.schema");

exports.getAllUsers = async (req, res) => {
    res.send(await User.find())
}

exports.createUser = async (req, res) => {
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