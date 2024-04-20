


export const TYPES = {
    JWT_SECRET: Symbol.for("JWT_SECRET"),

    prisma: Symbol.for("Prisma"),

    hash: Symbol.for("Hash"),
    jwt: Symbol.for("JWT"),

    TodoDAO: Symbol.for("TodoDAO"),
    AuthDAO: Symbol.for("AuthDAO"),


    TodoDataSource: Symbol.for("TodoDataSources"),
    AuthDataSource: Symbol.for("AuthDataSources"),

    TodoRepository: Symbol.for("TodoRepository"),
    AuthRepository: Symbol.for("AuthRepository"),


    AuthController: Symbol.for("AuthController"),
    TodoController: Symbol.for("TodoController"),


}