import { RegisterDTO } from '../../../dtos/auth/Register.dto';


export interface RegisterUserUseCase {
    registerUser(registerDTO: RegisterDTO)
}