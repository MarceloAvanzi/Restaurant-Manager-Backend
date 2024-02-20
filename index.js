import './src/infrastructure/database/db_connection.js';
import 'dotenv/config';
import express from 'express';
import configRoutes from './src/infrastructure/config/config.routes.js';
import mealRoutes from './src/usecases/meal/meal.routes.js';
import userRoutes from './src/usecases/user/user.routes.js';
import jwtRoutes from './src/usecases/authentication/jwt.routes.js';

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

// Calling routes and passing the app from express instance as parameter
configRoutes(app);
mealRoutes(app);
userRoutes(app);
jwtRoutes(app);

// App is running
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})