import { Router } from "express";
import { AuthRepository } from '../../domain/repository/AuthRepository';
import { myContainer } from "../../di/Container";
import { TYPES } from "../../di/Types";
import { AuthController } from "./auth.controller";


export class AuthRoutes {

    static get getRoutes() {
        const router = Router();
        const AuthController = myContainer.get<AuthController>(TYPES.AuthController);


        router.post('/login', AuthController.login);
        router.post('/register', AuthController.register);


        return router;

    }
}