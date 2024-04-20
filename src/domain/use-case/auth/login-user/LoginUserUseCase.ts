import { LoginDTO } from '../../../dtos/auth/Login.dto';

export interface LoginUserUseCase {
    execute(loginDTO: LoginDTO): Promise<any>;
}