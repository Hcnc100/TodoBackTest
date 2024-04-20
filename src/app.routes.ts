import { Router } from "express";
import { AuthRoutes } from "./presentation/auth/auth.routes";


export class AppRoutes {

    static get getRoutes() {
        const router = Router();

        router.use('/api/auth', AuthRoutes.getRoutes);

        return router;
    }
}