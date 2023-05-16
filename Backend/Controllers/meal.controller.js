const Meal = require('../Models/meal.schema')

exports.getAllMeals = async (req, res) => {
    console.log(await Meal.find())
    res.send(await Meal.find());
};

exports.createMeal = async (req, res) => {
    // const order = new Order({ name: "Beans", price: 15.50 })
    // await order.save()
    // console.log('Order created', order)

    // or

    const meal = await Meal.create({ 
        name: "Rice", 
        price: 8.50, 
        portion: "200g"
    })
    console.log("Meal created", meal)
}