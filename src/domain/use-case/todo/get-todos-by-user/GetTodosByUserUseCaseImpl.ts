import { GetTodosByUserUseCase } from "./GetTodosByUserUseCase";
import { TodoRepository } from '../../../repository/TodoRepository';



export class GetTodosByUserUseCaseImpl implements GetTodosByUserUseCase {
    constructor(
        private readonly todoRepository: TodoRepository
    ) { }

    async execute(userId: string): Promise<any> {
        const response = await this.todoRepository.getByUserId(userId);

        const tasks = response.map((task) => {
            return {
                id: task.id,
                title: task.title,
                description: task.description,
            }
        });


        return {
            message: 'Todos found',
            todos: tasks,
            userId: userId
        }
    }
}