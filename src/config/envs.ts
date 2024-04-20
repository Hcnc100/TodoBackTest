// import { get } from "env-var";


// export const envs = {
//     PORT: get("PORT").required().asPortNumber(),
//     NODE_ENV: get("NODE_ENV").required().asString(),
//     PUBLIC_URL: get("PUBLIC_URL").required().asString(),
//     JWT_SECRET: get("JWT_SECRET").required().asString(),
// }

export const envs = {
    PORT: +process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PUBLIC_URL: process.env.PUBLIC_URL || 'http://localhost:3000',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
}