const axios = require('axios');

const axiosOptions = {
    headers: {
        'X-RapidAPI-Key': process.env.rapidApiKey,
        'X-RapidAPI-Host': process.env.rapidApiHost
    }
}

exports.getMealPlans = async (req, res) => {
    const url = "https://suggestic1.p.rapidapi.com/api/v1/login"

    console.log(axiosOptions)

    const mealResponse = await axios.post(url, axiosOptions)
    // console.log(mealResponse.data.message)
}