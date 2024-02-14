import MealController from '../controllers/meal.controller.js';

export default (app) => {
    app.get('/api/getAllMeals', MealController.getAllMeals);
    app.get('/api/getByName/:name', MealController.getByName);
    app.post('/api/createMeal', MealController.createMeal);
};