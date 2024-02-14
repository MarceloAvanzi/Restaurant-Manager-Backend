import './src/database/db_connection.js';
import 'dotenv/config';
import express from 'express';
import configRoutes from './src/routes/config.routes.js';
import mealRoutes from './src/routes/meal.routes.js';
import userRoutes from './src/routes/user.routes.js';
import jwtRoutes from './src/routes/jwt.routes.js';

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