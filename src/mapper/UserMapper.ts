import { User } from "../types/User";

export default (user: any): User => ({
    id: user.id,
    name: user.name
})