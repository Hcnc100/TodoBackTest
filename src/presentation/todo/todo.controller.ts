import { inject, injectable } from "inversify";
import { TodoRepository } from '../../domain/repository/TodoRepository';
import { Request, Response } from 'express';
import { GetTodosByUserUseCaseImpl } from "../../domain/use-case/todo/get-todos-by-user/GetTodosByUserUseCaseImpl";
import { CustomError } from "../../domain/errors/custom.errors";
import { CreateTodoDTO } from '../../domain/dtos/todo/CreateTodo.dto';
import { CreateTodoUseCaseImpl } from "../../domain/use-case/todo/create/CreateTodoUseCaseImpl";
import { TYPES } from "../../di/Types";
import { GetUserByTokenImpl } from "../../domain/use-case/auth/get-user-by-token/GetUserByIdUseCaseImpl";
import { AuthRepository } from '../../domain/repository/AuthRepository';
import { AuthTokenData } from "../../domain/model/AuthTokenData";


@injectable()
export class TodoController {


    constructor(
        @inject(TYPES.TodoRepository)
        private readonly todoRepository: TodoRepository,
        @inject(TYPES.AuthRepository)
        private readonly authRepository: AuthRepository
    ) { }

    handleErrors = (error: any, res: Response) => {
        console.log(error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }


    public getTodosByUser = (req: Request, res: Response) => {

        const [error, authToken] = AuthTokenData.createFromRequest(req);

        if (error) {
            return res.status(401).json({ message: error });
        }


        new GetUserByTokenImpl(this.authRepository).execute(authToken!)
            .then((response) => {
                return new GetTodosByUserUseCaseImpl(this.todoRepository).execute(response.id)
            })
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((err) => this.handleErrors(err, res));

    }

    public createTodo = (req: Request, res: Response) => {

        const [errorAuth, authToken] = AuthTokenData.createFromRequest(req);

        if (errorAuth) {
            return res.status(401).json({ message: errorAuth });
        }


        new GetUserByTokenImpl(this.authRepository).execute(authToken!)
            .then((userData) => {
                const [error, createdTodoDTO] = CreateTodoDTO.create(
                    {
                        ...req.body,
                        userId: userData.id
                    }
                );

                if (error) throw CustomError.badRequest(error);

                return new CreateTodoUseCaseImpl(this.todoRepository).execute(createdTodoDTO);
            })
            .then((response) => {
                return res.status(201).json(response);
            })
            .catch((err) => this.handleErrors(err, res));
    }
}