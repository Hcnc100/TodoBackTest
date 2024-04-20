import { TodoData } from "../../model/Todo.data";
import { CreateTodoDTO } from '../../dtos/todo/CreateTodo.dto';
import { UpdateTodoDTO } from '../../dtos/todo/UpdateTodo.dto';


export interface TodoDAO {
    getAll(): Promise<TodoData[]>;
    getByUserId(userId: string): Promise<TodoData[]>;
    get(id: string): Promise<TodoData>;
    create(createTodoDTO: CreateTodoDTO): Promise<TodoData>;
    update(updateTodoDTO: UpdateTodoDTO): Promise<TodoData>;
    delete(id: string): Promise<void>;
}