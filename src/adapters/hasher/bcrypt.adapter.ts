import { injectable } from "inversify";
import type { Hasher } from "./hasher";
import * as bcrypt from 'bcryptjs';


@injectable()
export class HasherAdapter implements Hasher {
    async hash(value: string): Promise<string> {
        return await bcrypt.hash(value, 12);
    }

    async compare(value: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(value, hash);
    }

    hashSync(value: string): string {
        return bcrypt.hashSync(value, 12);
    }
}