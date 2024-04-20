

export class RegisterDTO {

    private constructor(
        public email: string,
        public password: string
    ) { }

    public static create(
        object: { [key: string]: any }
    ): [string?, RegisterDTO?] {
        const { email, password } = object;
        if (!email) return ["El email es requerido"];
        if (!password) return ["La contraseña es requerida"];
        return [undefined, new RegisterDTO(email, password)];
    }
}