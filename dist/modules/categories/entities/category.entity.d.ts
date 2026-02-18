import { Branch } from "../../branches/entities/branch.entity";
import { Product } from "../../products/entities/product.entity";
export declare class Category {
    id?: string;
    branchId?: string;
    name?: string;
    is_active?: boolean;
    branch?: Branch;
    products?: Product[];
}
//# sourceMappingURL=category.entity.d.ts.map