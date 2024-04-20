
export interface Hasher {
    hash(value: string): Promise<string>;
    hashSync(value: string): string;
    compare(value: string, hash: string): Promise<boolean>;
}