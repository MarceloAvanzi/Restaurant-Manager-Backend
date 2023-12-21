module.exports = (app) => {
    const userController = require("../controllers/user.controller");

    app.get('/api/getAllUsers', userController.getAllUsers);
    app.post('/api/createUser', userController.createUser);

    
};