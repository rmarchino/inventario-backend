import { User } from "../users/entities/user.entity";
import { AuthLoginDto, AuthRegisterDto } from "./dto/auth.dto";
declare const loginUser: ({ username, password }: AuthLoginDto) => Promise<"USER_NOT_FOUND" | "PASSWORD_INCORRECT" | {
    token: string;
    user: {
        id: string | undefined;
        fullName: string | undefined;
        role: string | undefined;
        branch: string | undefined;
        branchId: string | undefined;
    };
}>;
declare const registerUser: (authUser: AuthRegisterDto) => Promise<User | "USER_ALREADY_EXISTS">;
export { loginUser, registerUser };
//# sourceMappingURL=auth.service.d.ts.map