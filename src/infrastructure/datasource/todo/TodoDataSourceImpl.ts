import { inject, injectable } from "inversify";
import { TodoDataSource } from "../../../domain/datasource/todo/TodoDataSource";
import { CreateTodoDTO } from "../../../domain/dtos/todo/CreateTodo.dto";
import { UpdateTodoDTO } from "../../../domain/dtos/todo/UpdateTodo.dto";
import { TodoData } from "../../../domain/model/Todo.data";
import { TodoDAO } from '../../../domain/daos/todo/TodoDAO';
import { TYPES } from "../../../di/Types";

@injectable()
export class TodoDataSourceImpl implements TodoDataSource {


    constructor(
        @inject(TYPES.TodoDAO)
        private readonly todoDAO: TodoDAO
    ) {

    }
    getAll(): Promise<TodoData[]> {
        return this.todoDAO.getAll();
    }
    getByUserId(userId: string): Promise<TodoData[]> {
        return this.todoDAO.getByUserId(userId);
    }
    get(id: string): Promise<TodoData> {
        return this.todoDAO.get(id);
    }
    create(createTodoDTO: CreateTodoDTO): Promise<TodoData> {
        return this.todoDAO.create(createTodoDTO);
    }
    update(updateTodoDTO: UpdateTodoDTO): Promise<TodoData> {
        return this.todoDAO.update(updateTodoDTO);
    }
    delete(id: string): Promise<void> {
        return this.todoDAO.delete(id);
    }


}