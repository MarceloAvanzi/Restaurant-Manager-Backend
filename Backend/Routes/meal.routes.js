module.exports = (app) => {
    const mealController = require("../Controllers/meal.controller");

    app.get('/api/getAllMeals', mealController.getAllMeals);
    app.get('/api/getByName/:name', mealController.getByName);
    app.post('/api/createMeal', mealController.createMeal);

};