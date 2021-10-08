import axios from 'axios';
import { UserDetail } from '../types/UserDetail';
import userDetailMapper from '../mapper/UserDetailMapper';

const URL = "https://jsonplaceholder.typicode.com/users"

const getUserDetailService = async (userId: number): Promise<UserDetail> => userDetailMapper((await axios({ 
    url: `${URL}/${userId}`
})).data);

export default getUserDetailService;