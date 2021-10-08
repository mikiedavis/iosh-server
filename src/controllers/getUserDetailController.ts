import getUserDetailService from '../services/getUserDetailService';
import { UserDetail } from '../types/UserDetail';

const getUserDetailController = async (userId: number): Promise<UserDetail> => await getUserDetailService(userId);

export default getUserDetailController;