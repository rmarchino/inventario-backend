import { Supplier } from "./supplier.entity";
import { SupplierInvoice } from "./supplier-invoice.entity";
import { CashSession } from "../../cash/entities/cash.entity";
export declare class SupplierPayment {
    id: string;
    supplierId: string;
    invoiceId: string;
    cashSessionId: string;
    paymentMethod: string;
    amount: number;
    reference: string;
    createdAt: Date;
    supplier: Supplier;
    invoice: SupplierInvoice;
    cashSession: CashSession;
}
//# sourceMappingURL=supplier-payment.entity.d.ts.map