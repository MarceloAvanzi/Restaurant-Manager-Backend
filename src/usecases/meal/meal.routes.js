import { Router } from 'express';
import MealController from './meal.service.js';

const mealRoutes = Router();

mealRoutes.get('/list', MealController.getAllMeals);
mealRoutes.get('/:name', MealController.getByName);
mealRoutes.post('/create', MealController.createMeal);

export default (app) => {
    app.use('/meal', mealRoutes)
};