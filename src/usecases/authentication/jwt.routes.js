import 'dotenv/config'
import JwtService from './jwt.service.js';
import { Router } from 'express';

const jwtRoutes = Router();

jwtRoutes.post('/refreshtoken', JwtService.refreshToken);
jwtRoutes.post('/login', JwtService.login);
jwtRoutes.delete('/logout', JwtService.logout);

export default (app) => {
    // example from database
    const posts = [
        {
            username: 'Kyle',
            title: 'Post 1'
        },
        {
            username: 'Jim',
            title: 'Post 2'
        }
    ]

    // example for an authenticated route
    app.get('/posts', JwtService.authenticateToken, (req, res) => {
        res.send(posts.filter(post => post.username === req.user.name))
    })

    app.use('/auth', jwtRoutes);
};