import { Sale } from "../../sales/entities/sale.entity";
export declare class Customer {
    id: string;
    documentType: string;
    documentNumber: string;
    fullName: string;
    businessName: string;
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
    sales: Sale[];
}
//# sourceMappingURL=customer.entity.d.ts.map