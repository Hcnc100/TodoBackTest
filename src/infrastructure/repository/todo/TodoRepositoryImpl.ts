import { inject, injectable } from 'inversify';
import { CreateTodoDTO } from '../../../domain/dtos/todo/CreateTodo.dto';
import { UpdateTodoDTO } from '../../../domain/dtos/todo/UpdateTodo.dto';
import { TodoData } from '../../../domain/model/Todo.data';
import { TodoRepository } from '../../../domain/repository/TodoRepository';
import { TodoDataSource } from '../../../domain/datasource/todo/TodoDataSource';
import { TYPES } from '../../../di/Types';


@injectable()
export class TodoRepoImpl implements TodoRepository {

    constructor(
        @inject(TYPES.TodoDataSource)
        private readonly todoDataSource: TodoDataSource
    ) {

    }
    getAll(): Promise<TodoData[]> {
        return this.todoDataSource.getAll();
    }
    getByUserId(userId: string): Promise<TodoData[]> {
        return this.todoDataSource.getByUserId(userId);
    }
    get(id: string): Promise<TodoData> {
        return this.todoDataSource.get(id);
    }
    create(createTodoDTO: CreateTodoDTO): Promise<TodoData> {
        return this.todoDataSource.create(createTodoDTO);
    }
    update(updateTodoDTO: UpdateTodoDTO): Promise<TodoData> {
        return this.todoDataSource.update(updateTodoDTO);
    }
    delete(id: string): Promise<void> {
        return this.todoDataSource.delete(id);
    }



}