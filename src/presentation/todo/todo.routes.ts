import { Router } from "express";
import { myContainer } from "../../di/Container";
import { TYPES } from "../../di/Types";
import { TodoController } from "./todo.controller";


export class TodoRoutes {

    static get getRoutes() {
        const router = Router();
        const todoController = myContainer.get<TodoController>(TYPES.TodoController);



        router.get('/', todoController.getTodosByUser);
        router.post('/', todoController.createTodo);

        return router;
    }
}