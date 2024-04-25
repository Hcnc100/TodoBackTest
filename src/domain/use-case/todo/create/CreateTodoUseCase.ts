import { CreateTodoDTO } from '../../../dtos/todo/CreateTodo.dto';


export interface CreateTodoUseCase {
    execute(createTodoDTO: CreateTodoDTO): Promise<any>
}