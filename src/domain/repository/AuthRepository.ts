import { LoginDTO } from '../dtos/auth/Login.dto';
import { UserData } from '../model/User.data';
import { RegisterDTO } from '../dtos/auth/Register.dto';

export interface AuthRepository {
    login(LoginDTO: LoginDTO): Promise<UserData>;
    register(registerDTO: RegisterDTO): Promise<UserData>;
    getUserByToken(token: string): Promise<UserData>;
}