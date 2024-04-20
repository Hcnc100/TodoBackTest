

export class UpdateTodoDTO {

    private constructor(
        public id: string,
        public title: string,
        public description: string,
        public isCompleted: boolean
    ) { }



    public static create(
        object: { [key: string]: any }
    ): [string?, UpdateTodoDTO?] {
        const { id, title, description, isCompleted } = object;
        if (!id) return ["El id es requerido"];
        if (!title) return ["El titulo es requerido"];
        if (!description) return ["La descripcion es requerida"];
        if (isCompleted === undefined) return ["El estado de completitud es requerido"];
        return [undefined, new UpdateTodoDTO(id, title, description, isCompleted)];
    }
}