import { Branch } from "../../branches/entities/branch.entity";
import { User } from "../../users/entities/user.entity";
import { CashSession } from "../../cash/entities/cash.entity";
import { Customer } from "../../customers/entities/customer.entity";
import { SaleItem } from "./sale-item.entity";
import { SunatDocument } from "../../sunat/entities/sunat-document.entity";
export declare class Sale {
    id: string;
    branchId: string;
    sellerId: string;
    cashSessionId: string;
    customerId: string;
    paymentMethod: string;
    receiptType: string;
    receiptSeries: string;
    receiptNumber: string;
    subtotal: number;
    igv: number;
    total: number;
    cashAmount: number;
    digitalAmount: number;
    status: string;
    createdAt: Date;
    branch: Branch;
    seller: User;
    cashSession: CashSession;
    customer: Customer;
    saleItems: SaleItem[];
    sunatDocument: SunatDocument;
}
//# sourceMappingURL=sale.entity.d.ts.map