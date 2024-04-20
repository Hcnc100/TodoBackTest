
export interface JWTSign {
    sign(payload: any, duration: string): Promise<string | null>

    verify<T>(token: string): Promise<T | null>
}