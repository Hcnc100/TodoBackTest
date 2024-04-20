
export class TodoData {

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public isCompleted: boolean,
        public createdAt: Date,
        public updatedAt: Date
    ) { }


    public static create(
        object: { [key: string]: any }
    ): [string?, TodoData?] {
        const { id, title, description, isCompleted, createdAt, updatedAt } = object;
        if (!id) return ["El id es requerido"];
        if (!title) return ["El titulo es requerido"];
        if (!description) return ["La descripcion es requerida"];
        if (isCompleted === undefined) return ["El estado de completitud es requerido"];
        if (!createdAt) return ["La fecha de creacion es requerida"];
        if (!updatedAt) return ["La fecha de actualizacion es requerida"];
        return [undefined, new TodoData(id, title, description, isCompleted, createdAt, updatedAt)];
    }

}