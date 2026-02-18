import { Supplier } from "./supplier.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { SupplierInvoiceItem } from "./supplier-invoice-item.entity";
import { SupplierPayment } from "./supplier-payment.entity";
export declare enum InvoiceStatus {
    PENDING = "PENDING",
    PARTIAL = "PARTIAL",
    PAID = "PAID",
    CANCELED = "CANCELED"
}
export declare class SupplierInvoice {
    id: string;
    supplierId: string;
    branchId: string;
    invoiceNumber: string;
    invoiceDate: Date;
    subtotal: number;
    igv: number;
    total: number;
    status: InvoiceStatus;
    createdAt: Date;
    supplier: Supplier;
    branch: Branch;
    items: SupplierInvoiceItem[];
    payments: SupplierPayment[];
}
//# sourceMappingURL=supplier-invoice.entity.d.ts.map