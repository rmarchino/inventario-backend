import { Branch } from "../../branches/entities/branch.entity";
import { User } from "../../users/entities/user.entity";
import { Sale } from "../../sales/entities/sale.entity";
export declare enum CashStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
}
export declare class CashSession {
    id: string;
    branchId: string;
    userId: string;
    openingAmount: number;
    closingAmount: number;
    calculatedAmount: number;
    difference: number;
    openedAt: Date;
    closedAt: Date;
    status: CashStatus;
    notes: string;
    branch: Branch;
    user: User;
    sales: Sale[];
}
//# sourceMappingURL=cash.entity.d.ts.map