
export class CreateTodoDTO {

    private constructor(
        public title: string,
        public description: string,
        public userId: string
    ) { }


    public static create(
        object: { [key: string]: any }
    ): [string?, CreateTodoDTO?] {
        const { title, description, userId } = object;
        if (!title) return ["El titulo es requerido"];
        if (!description) return ["La descripcion es requerida"];
        if (!userId) return ["El usuario es requerido"];
        return [undefined, new CreateTodoDTO(title, description, userId)];
    }
}