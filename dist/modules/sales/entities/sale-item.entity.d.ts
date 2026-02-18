import { Sale } from "./sale.entity";
import { Product } from "../../products/entities/product.entity";
export declare class SaleItem {
    id: string;
    saleId: string;
    productId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    sale: Sale;
    product: Product;
}
//# sourceMappingURL=sale-item.entity.d.ts.map