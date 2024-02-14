import UserController from '../controllers/user.controller.js';

export default (app) => {
    app.get('/api/getAllUsers', UserController.getAllUsers);
    app.post('/api/createUser', UserController.createUser);    
};