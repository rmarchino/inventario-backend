import { SupplierInvoice } from "./supplier-invoice.entity";
import { Product } from "../../products/entities/product.entity";
export declare class SupplierInvoiceItem {
    id: string;
    invoiceId: string;
    productId: string;
    quantity: number;
    unitCost: number;
    totalCost: number;
    invoice: SupplierInvoice;
    product: Product;
}
//# sourceMappingURL=supplier-invoice-item.entity.d.ts.map