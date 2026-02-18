import { User } from "../../users/entities/user.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { PayrolPayment } from "../../payments/entities/payroll-payment.entity";
export declare class Employee {
    id: string;
    userId: string | null;
    branchId: string;
    salary: number;
    paymentFrequency: string;
    hireDate: Date;
    status: string;
    user: User;
    branch: Branch;
    payments: PayrolPayment[];
}
//# sourceMappingURL=employe.entity.d.ts.map