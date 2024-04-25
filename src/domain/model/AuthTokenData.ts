import { Request } from 'express'


export class AuthTokenData {
    constructor(
        public readonly token: string
    ) { }


    static createFromRequest(
        request: Request
    ): [string?, AuthTokenData?] {
        const token = request.headers.authorization

        if (!token) {
            return ['El token es requerido']
        }

        if (!token.includes('Bearer')) {
            return ['El token debe ser un Bearer token']
        }

        const cleanToken = token.split(' ')[1]

        if (!cleanToken) {
            return ['El token es requerido']
        }

        return [undefined, new AuthTokenData(cleanToken)]
    }
}