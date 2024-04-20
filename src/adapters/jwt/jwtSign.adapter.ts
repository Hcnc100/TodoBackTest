import { injectable, inject } from "inversify";
import { JWTSign } from "./jwtSign";
import * as jwt from 'jsonwebtoken';
import { TYPES } from "../../di/Types";

@injectable()
export class JWTSignAdapter implements JWTSign {

    constructor(
        @inject(TYPES.JWT_SECRET)
        private readonly secret: string
    ) { }
    async sign(payload: object, duration: string): Promise<string | null> {
        return jwt.sign(payload, this.secret, { expiresIn: duration });
    }


    async verify<T>(token: string): Promise<T | null> {
        try {
            const decoded = jwt.verify(token, this.secret);
            return decoded as T;
        } catch (error) {
            return null;
        }
    }
}