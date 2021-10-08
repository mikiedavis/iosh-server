import { UserDetail } from "../types/UserDetail";

export default (userDetail: any): UserDetail => ({
    id: userDetail.id,
    name: userDetail.name,
    email: userDetail.email,
    username: userDetail.username
})