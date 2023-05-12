require('./Database/db_connection.js');
const express = require('express'); // or import express from 'express' if you put  "type": "module" to package.json
const Meal = require('./Models/meal.schema.js')
const app = express();


async function createMeal() {
    // const order = new Order({ name: "Beans", price: 15.50 })
    // await order.save()
    // console.log('Order created', order)

    // or

    const meal = await Meal.create({ 
        name: "French Fries", 
        price: 10.50, 
        portion: "400g"
    })
    console.log("Meal created", meal)
}

// createMeal()


app.get('/', (req, res) => { // First the path then the fallback function
    res.send('Hi mates!!')
    console.dir(req.hostname)
});

app.get('/api/orders', (req, res) => {
    res.send([1,2,3])
})

app.get('/api/orders/:id', (req, res)  => {
    const id = req.params.id
    res.send(id)
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})