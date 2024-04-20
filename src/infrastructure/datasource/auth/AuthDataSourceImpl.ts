import { AuthDAO } from './../../../domain/daos/auth/AuthDAO';
import { inject, injectable } from "inversify";
import { AuthDataSource } from "../../../domain/datasource/auth/AuthDataSource";
import { TYPES } from '../../../di/Types';
import { LoginDTO } from '../../../domain/dtos/auth/Login.dto';
import { RegisterDTO } from '../../../domain/dtos/auth/Register.dto';
import { UserData } from '../../../domain/model/User.data';


@injectable()
export class AuthDataSourceImpl implements AuthDataSource {


    constructor(
        @inject(TYPES.AuthDAO)
        private readonly authDAO: AuthDAO
    ) { }
    login(loginDTO: LoginDTO): Promise<UserData> {
        return this.authDAO.login(loginDTO);
    }
    register(registerDTO: RegisterDTO): Promise<UserData> {
        return this.authDAO.register(registerDTO);
    }
    getUserByToken(token: string): Promise<UserData> {
        return this.authDAO.getUserByToken(token);
    }


}