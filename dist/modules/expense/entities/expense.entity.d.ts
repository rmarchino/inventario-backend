import { Branch } from "../../branches/entities/branch.entity";
import { ExpenseCategory } from "./expense-category.entity";
import { CashSession } from "../../cash/entities/cash.entity";
export declare class Expense {
    id: string;
    branchId: string;
    categoryId: string;
    cashSessionId: string;
    amount: number;
    paymentMethod: string;
    createdAt: Date;
    branch: Branch;
    category: ExpenseCategory;
    cashSession: CashSession;
}
//# sourceMappingURL=expense.entity.d.ts.map