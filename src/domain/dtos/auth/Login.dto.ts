
export class LoginDTO {

    private constructor(
        public email: string,
        public password: string
    ) { }


    public static create(
        object: { [key: string]: any }
    ): [string?, LoginDTO?] {
        const { email, password } = object;
        if (!email) return ["El email es requerido"];
        if (!password) return ["La contraseña es requerida"];
        return [undefined, new LoginDTO(email, password)];
    }
}