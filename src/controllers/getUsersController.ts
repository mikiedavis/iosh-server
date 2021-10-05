import getUsersService from '../services/getUsersService';
import { User } from '../types/User';

const getUsersController = async (): Promise<User[]> => await getUsersService();

export default getUsersController;