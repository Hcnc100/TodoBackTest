import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/Types';
import { AuthDataSource } from '../../domain/datasource/auth/AuthDataSource';
import { Request, Response } from 'express';
import { LoginDTO } from '../../domain/dtos/auth/Login.dto';
import { AuthRepository } from '../../domain/repository/AuthRepository';
import { LoginUserUseCaseImpl } from '../../domain/use-case/auth/login-user/LoginUserUseCaseImpl';
import { CustomError } from '../../domain/errors/custom.errors';
import { RegisterDTO } from '../../domain/dtos/auth/Register.dto';

@injectable()
export class AuthController {
    constructor(
        @inject(TYPES.AuthRepository)
        private readonly authRepository: AuthRepository
    ) { }

    handleErrors = (error: any, res: Response) => {
        console.log(error);
        if (error instanceof CustomError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }


    login = (req: Request, res: Response) => {
        const [error, loginDTO] = LoginDTO.create(req.body);

        if (error) return res.status(400).json({ message: error });


        new LoginUserUseCaseImpl(this.authRepository).execute(loginDTO)
            .then((data) => res.status(200).json(data))
            .catch((err) => this.handleErrors(err, res));

    }

    register = (req: Request, res: Response) => {
        const [error, registerDTO] = RegisterDTO.create(req.body);

        if (error) return res.status(400).json({ message: error });

        this.authRepository.register(registerDTO)
            .then((data) => res.status(201).json(data))
            .catch((err) => this.handleErrors(err, res));
    }
}