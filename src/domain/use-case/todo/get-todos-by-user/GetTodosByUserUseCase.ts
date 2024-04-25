

export interface GetTodosByUserUseCase {
    execute(userId: string): Promise<any>
}