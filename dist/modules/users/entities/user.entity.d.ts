import { Branch } from "../../branches/entities/branch.entity";
import { Role } from "../../roles/entities/role.entity";
export declare class User {
    id?: string;
    branchId?: string;
    roleId?: string;
    full_name?: string;
    username?: string;
    password_hash?: string;
    pin_code?: string;
    is_active?: boolean;
    created_at?: Date;
    branch?: Branch;
    role?: Role;
}
//# sourceMappingURL=user.entity.d.ts.map