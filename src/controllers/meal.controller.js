import Meal from '../models/meal.schema.js';
export default class MealController {

    static getAllMeals = async (req, res) => {
        res.send(await Meal.find());
    };
    
    static createMeal = async (req, res) => {
        const body = {
            name: req.body.name,
            price: req.body.price,
            portion: req.body.portion
        }
    
        const meal = await Meal.create({ 
            name: body.name, 
            price: body.price, 
            portion: body.portion
        })
    
        console.log("Meal created", meal)
        res.send(meal)
    };
    
    static getByName = async (req, res) => {
        const mealName = req.params.name
    
        const meal = await Meal.find({name: mealName})
    
        res.send(meal)
    };
}