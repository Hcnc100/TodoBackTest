
export class UserData {
    private constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public accessToken?: string
    ) { }

    public static create(
        object: { [key: string]: any }
    ): [string?, UserData?] {
        console.log(object);
        const { id, name, email, password } = object;
        if (!id) return ["El id es requerido"];
        if (!name) return ["El nombre es requerido"];
        if (!email) return ["El email es requerido"];
        if (!password) return ["La contraseña es requerida"];
        return [undefined, new UserData(id, name, email, password)];
    }
}