import { TodoData } from "../../../model/Todo.data";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { AuthRepository } from '../../../repository/AuthRepository';
import { TYPES } from "../../../../di/Types";
import { inject } from "inversify";
import { UserData } from "../../../model/User.data";
import { AuthTokenData } from "../../../model/AuthTokenData";

export class GetUserByTokenImpl implements GetUserByIdUseCase {


    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    execute(authTokenData: AuthTokenData): Promise<UserData> {
        return this.authRepository.getUserByToken(authTokenData);
    }

}