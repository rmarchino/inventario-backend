import { Branch } from "../../branches/entities/branch.entity";
import { Category } from "../../categories/entities/category.entity";
export declare enum SaleType {
    PESO = "PESO",
    UNIDAD = "UNIDAD"
}
export declare class Product {
    id: string;
    branchId?: string;
    categoryId?: string;
    name?: string;
    sku?: string;
    description?: string;
    price_perKg?: number;
    price_unit?: number;
    saleType?: SaleType;
    stock?: number;
    minStock?: number;
    imageUrl?: string;
    isActive?: boolean;
    createdAt?: Date;
    branch?: Branch;
    category?: Category;
}
//# sourceMappingURL=product.entity.d.ts.map