import { CashSession } from "./cash.entity";
export declare class CashCount {
    id: string;
    cashSessionId: string;
    bill_10: number;
    bill_20: number;
    bill_50: number;
    bill_100: number;
    bill_200: number;
    coinTotal: number;
    countedTotal: number;
    expectedTotal: number;
    difference: number;
    observation: string;
    createdAt: Date;
    cashSession: CashSession;
}
//# sourceMappingURL=cash-count.entity.d.ts.map