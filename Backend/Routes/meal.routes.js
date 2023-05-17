module.exports = (app) => {
    const bodyParser = require('body-parser');
    const mealController = require("../Controllers/meal.controller");

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.get('/api/getAllMeals', mealController.getAllMeals);
    app.post('/api/createMeal', mealController.createMeal);

}