import { Router } from "express";
import { AuthRoutes } from "./presentation/auth/auth.routes";
import { TodoRoutes } from "./presentation/todo/todo.routes";


export class AppRoutes {

    static get getRoutes() {
        const router = Router();

        router.use('/api/auth', AuthRoutes.getRoutes);
        router.use('/api/todos', TodoRoutes.getRoutes);

        return router;
    }
}