import { inject, injectable } from 'inversify';
import { LoginDTO } from '../../../domain/dtos/auth/Login.dto';
import { RegisterDTO } from '../../../domain/dtos/auth/Register.dto';
import { UserData } from '../../../domain/model/User.data';
import { AuthRepository } from '../../../domain/repository/AuthRepository';
import { AuthDataSource } from '../../../domain/datasource/auth/AuthDataSource';
import { TYPES } from '../../../di/Types';
import { AuthTokenData } from '../../../domain/model/AuthTokenData';

@injectable()
export class AuthRepositoImpl implements AuthRepository {


    constructor(
        @inject(TYPES.AuthDataSource)
        private readonly authDataSource: AuthDataSource
    ) { }

    login(LoginDTO: LoginDTO): Promise<UserData> {
        return this.authDataSource.login(LoginDTO);
    }
    register(registerDTO: RegisterDTO): Promise<UserData> {
        return this.authDataSource.register(registerDTO);
    }
    getUserByToken(authTokenData: AuthTokenData): Promise<UserData> {
        return this.authDataSource.getUserByToken(authTokenData);
    }
}