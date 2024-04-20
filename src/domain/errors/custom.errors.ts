
export class CustomError extends Error {
    private constructor(
        public readonly statusCode: number,
        public readonly message: string
    ) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    static badRequest(message: string) {
        return new CustomError(400, message);
    }

    static unauthorized(message: string) {
        return new CustomError(401, message);
    }

    static forbidden(message: string) {
        return new CustomError(403, message);
    }

    static notFound(message: string) {
        return new CustomError(404, message);
    }

    static conflict(message: string) {
        return new CustomError(409, message);
    }

    static internal(message: string, error?: any) {
        if (error) console.error(error);
        return new CustomError(500, message);
    }

    static serviceUnavailable(message: string) {
        return new CustomError(503, message);
    }
}