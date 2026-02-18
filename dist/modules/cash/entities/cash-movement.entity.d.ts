import { CashSession } from "./cash.entity";
import { User } from "../../users/entities/user.entity";
export declare class CashMovement {
    id: string;
    cashSessionId: string;
    userId: string;
    movementType: string;
    amount: number;
    createdAt: Date;
    cashSession: CashSession;
    user: User;
}
//# sourceMappingURL=cash-movement.entity.d.ts.map