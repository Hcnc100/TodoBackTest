import { TodoRepository } from '../../../repository/TodoRepository';
import { CreateTodoUseCase } from './CreateTodoUseCase';
import { CreateTodoDTO } from '../../../dtos/todo/CreateTodo.dto';

export class CreateTodoUseCaseImpl implements CreateTodoUseCase {

    constructor(
        private readonly todoRepository: TodoRepository
    ) { }


    async execute(createTodoDTO: CreateTodoDTO): Promise<any> {
        const response = await this.todoRepository.create(createTodoDTO);
        return {
            message: 'Todo created successfully',
            data: {
                id: response.id,
                title: response.title,
                description: response.description,
            }
        }
    }
}