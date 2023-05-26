import API from './api';

const usersService = {
    getAllUsers: async () => API.get("/getAllUsers"),
};

export default usersService