import { AuthTokenData } from "../../../model/AuthTokenData";
import { UserData } from "../../../model/User.data";

export interface GetUserByIdUseCase {
    execute(authTokenData: AuthTokenData): Promise<UserData>;
}