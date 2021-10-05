import getUserService from '../services/getUserService';
import { User } from '../types/User';

const getUserController = async (userId: number): Promise<User> => await getUserService(userId);

export default getUserController;