import API from "./api.js"

const mealsService = {
    getAllMeals: async () => API.get("/getAllMeals"),
};

export default mealsService