import { Employee } from "../../employees/entities/employe.entity";
import { CashSession } from "../../cash/entities/cash.entity";
export declare class PayrolPayment {
    id: string;
    employeeId: string;
    cashSessionId: string;
    paymentType: string;
    amount: number;
    note: string;
    createdAt: Date;
    employee: Employee;
    cashSession: CashSession;
}
//# sourceMappingURL=payroll-payment.entity.d.ts.map