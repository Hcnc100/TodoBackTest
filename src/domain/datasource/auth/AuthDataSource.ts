import { LoginDTO } from '../../dtos/auth/Login.dto';
import { RegisterDTO } from '../../dtos/auth/Register.dto';
import { AuthTokenData } from '../../model/AuthTokenData';
import { UserData } from '../../model/User.data';

export interface AuthDataSource {
    login(loginDTO: LoginDTO): Promise<UserData>;
    register(registerDTO: RegisterDTO): Promise<UserData>;
    getUserByToken(authTokenData: AuthTokenData): Promise<UserData>;
}