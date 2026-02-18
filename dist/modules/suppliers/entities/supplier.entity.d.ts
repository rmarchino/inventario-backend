import { Branch } from "../../branches/entities/branch.entity";
import { SupplierInvoice } from "./supplier-invoice.entity";
import { SupplierPayment } from "./supplier-payment.entity";
export declare class Supplier {
    id: string;
    branchId: string;
    documentType: string;
    documentNumber: string;
    businessName: string;
    contactName: string;
    email: string;
    phone: string;
    address: string;
    bankAccount: string;
    isActive: boolean;
    createdAt: Date;
    branch: Branch;
    invoices: SupplierInvoice[];
    payments: SupplierPayment[];
}
//# sourceMappingURL=supplier.entity.d.ts.map