module.exports = (app) => {
    const userController = require("../Controllers/user.controller");
    const bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.get('/api/getAllUsers', userController.getAllUsers);
    app.post('/api/createUser', userController.createUser);

}