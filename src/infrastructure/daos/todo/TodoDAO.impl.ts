import { inject, injectable } from "inversify";
import { TodoDAO } from "../../../domain/daos/todo/TodoDAO";
import { CreateTodoDTO } from "../../../domain/dtos/todo/CreateTodo.dto";
import { UpdateTodoDTO } from "../../../domain/dtos/todo/UpdateTodo.dto";
import { TodoData } from "../../../domain/model/Todo.data";
import { PrismaClient } from "@prisma/client/extension";
import { TYPES } from "../../../di/Types";
import { CustomError } from "../../../domain/errors/custom.errors";



@injectable()
export class TodoDAOImpl implements TodoDAO {


    constructor(
        @inject(TYPES.prisma)
        private readonly prismaClient: PrismaClient
    ) { }
    async getByUserId(userId: string): Promise<TodoData[]> {
        const todos = await this.prismaClient.todo.findMany({
            where: { userId }
        });
        return todos.map(todo => {
            const [error, todoData] = TodoData.create(todo);
            if (error) throw new Error(error);
            return todoData;
        });
    }

    async getAll(): Promise<TodoData[]> {
        const todos = await this.prismaClient.todo.findMany();

        return todos.map(todo => {
            const [error, todoData] = TodoData.create(todo);
            if (error) throw new Error(error);
            return todoData;
        });
    }
    async get(id: string): Promise<TodoData> {
        const todo = await this.prismaClient.todo.findUnique({
            where: { id }
        });

        if (!todo) throw CustomError.notFound("Todo no encontrado");

        const [error, todoData] = TodoData.create(todo);

        if (error) throw new Error(error);

        return todoData;
    }
    async create(createTodoDTO: CreateTodoDTO): Promise<TodoData> {

        const todo = await this.prismaClient.todo.create({
            data: createTodoDTO
        });

        const [error, todoData] = TodoData.create(todo);

        if (error) throw new Error(error);

        return todoData;
    }
    async update(updateTodoDTO: UpdateTodoDTO): Promise<TodoData> {
        const todo = await this.prismaClient.todo.update({
            where: { id: updateTodoDTO.id },
            data: updateTodoDTO
        });

        const [error, todoData] = TodoData.create(todo);

        if (error) throw new Error(error);

        return todoData;

    }
    delete(id: string): Promise<void> {
        return this.prismaClient.todo.delete({
            where: { id }
        });
    }

}