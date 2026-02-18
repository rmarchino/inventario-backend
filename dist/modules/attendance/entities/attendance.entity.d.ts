import { User } from "../../users/entities/user.entity";
import { Branch } from "../../branches/entities/branch.entity";
export declare class Attendance {
    id?: string;
    userId: string;
    branchId: string;
    method?: string;
    checkIn: Date;
    checkOut: Date;
    workHours: number;
    user: User;
    branch: Branch;
}
//# sourceMappingURL=attendance.entity.d.ts.map