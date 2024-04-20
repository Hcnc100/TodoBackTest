import { PrismaClient } from "@prisma/client/extension";
import { AuthDAO } from "../../../domain/daos/auth/AuthDAO";
import { LoginDTO } from '../../../domain/dtos/auth/Login.dto';
import { RegisterDTO } from "../../../domain/dtos/auth/Register.dto";
import { TYPES } from "../../../di/Types";
import { inject, injectable } from "inversify";
import { UserData } from "../../../domain/model/User.data";
import { Hash } from "crypto";
import { HasherAdapter } from "../../../adapters/hasher/bcrypt.adapter";
import { JWTSignAdapter } from "../../../adapters/jwt/jwtSign.adapter";
import { CustomError } from "../../../domain/errors/custom.errors";

@injectable()
export class AuthDAOImpl implements AuthDAO {

    constructor(
        @inject(TYPES.prisma)
        private readonly prismaClient: PrismaClient,
        @inject(TYPES.hash)
        private readonly hash: HasherAdapter,
        @inject(TYPES.jwt)
        private readonly jwt: JWTSignAdapter
    ) { }

    async login(loginDTO: LoginDTO): Promise<UserData> {
        const { email, password } = loginDTO;

        const user = await this.prismaClient.user.findUnique({
            where: { email }
        });

        if (!user) throw CustomError.notFound("Usuario no encontrado");

        const validPassword = await this.hash.compare(password, user.password);

        if (!validPassword) throw CustomError.badRequest("Credeciales invalidas");

        const [error, userData] = UserData.create(user);

        if (error) throw new Error(error);

        const token = await this.jwt.sign({ idUser: userData.id }, '2h');

        userData.accessToken = token;
        return userData;
    }
    async register(registerDTO: RegisterDTO): Promise<UserData> {

        const userExists = await this.prismaClient.user.findUnique({
            where: { email: registerDTO.email }
        });

        if (userExists) throw CustomError.badRequest("Usuario ya existe");

        const password = await this.hash.hash(registerDTO.password);

        const user = await this.prismaClient.user.create({
            data: {
                ...registerDTO,
                password
            }
        });

        const [error, userData] = UserData.create(user);

        if (error) throw new Error(error);

        return userData;
    }

    async getUserByToken(token: string): Promise<UserData> {
        const idUser = await this.jwt.verify<{ idUser: string }>(token);

        if (!idUser) throw CustomError.unauthorized("Token invalido");

        const user = await this.prismaClient.user.findUnique({
            where: { id: idUser.idUser }
        });

        if (!user) throw CustomError.notFound("Usuario no encontrado");

        const [error, userData] = UserData.create(user);

        if (error) throw new Error(error);

        return userData;
    }
}