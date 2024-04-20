

export class RegisterDTO {

    private constructor(
        public email: string,
        public password: string,
        public name: string,
    ) { }

    public static create(
        object: { [key: string]: any }
    ): [string?, RegisterDTO?] {
        const { email, password, name } = object;
        if (!email) return ["El email es requerido"];
        if (!password) return ["La contraseña es requerida"];
        if (!name) return ["El nombre es requerido"];
        return [undefined, new RegisterDTO(email, password, name)];
    }
}