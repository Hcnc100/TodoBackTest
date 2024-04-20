import { RegisterDTO } from "../../../dtos/auth/Register.dto";
import { AuthRepository } from "../../../repository/AuthRepository";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

export class RegisterUserUseCaseImpl implements RegisterUserUseCase {


    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    registerUser(registerDTO: RegisterDTO) {
        return this.authRepository.register(registerDTO);
    }

}