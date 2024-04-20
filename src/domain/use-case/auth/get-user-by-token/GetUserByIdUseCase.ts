import { TodoData } from "../../../model/Todo.data";

export interface GetUserByIdUseCase {
    execute(id: string): Promise<TodoData>;
}