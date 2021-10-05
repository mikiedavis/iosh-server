import axios from 'axios';
import { User } from '../types/User';
import userMapper from '../mapper/UserMapper';

const URL = "https://jsonplaceholder.typicode.com/users"

const getUserService = async (userId: number): Promise<User> => userMapper((await axios({ 
    url: `${URL}/${userId}`
})).data);

export default getUserService;