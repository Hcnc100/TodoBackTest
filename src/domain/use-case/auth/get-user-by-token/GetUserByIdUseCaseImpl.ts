import { TodoData } from "../../../model/Todo.data";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { AuthRepository } from '../../../repository/AuthRepository';
import { TYPES } from "../../../../di/Types";
import { inject } from "inversify";

export class GetUserByTokenImpl implements GetUserByIdUseCase {


    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    execute(id: string): Promise<TodoData> {
        throw new Error("Method not implemented.");
    }

}