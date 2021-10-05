import axios from 'axios';
import { User } from '../types/User';
import userMapper from '../mapper/UserMapper';

const URL = "https://jsonplaceholder.typicode.com/users"

const getUsersService = async (): Promise<User[]> => { 
    const users = (await axios({ 
        url: `${URL}`
    })).data as any[];
    return users.map(user => userMapper(user));
}

export default getUsersService;