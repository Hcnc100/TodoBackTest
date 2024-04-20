import { LoginDTO } from "../../../dtos/auth/Login.dto";
import { AuthRepository } from "../../../repository/AuthRepository";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserUseCaseImpl implements LoginUserUseCase {

    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    async execute(loginDTO: LoginDTO): Promise<any> {
        const response = await this.authRepository.login(loginDTO);

        return response;
    }

}