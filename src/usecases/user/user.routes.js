import { Router } from 'express';
import UserController from './user.service.js';

const userRoutes = Router();

userRoutes.get('/list', UserController.getAllUsers);
userRoutes.post('/create', UserController.createUser);

export default (app) => {
    app.use('/user', userRoutes);
};