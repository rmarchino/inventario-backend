import { Product } from "../../products/entities/product.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { User } from "../../users/entities/user.entity";
export declare class StockMoment {
    id?: string;
    productId?: string;
    branchId?: string;
    userId?: string;
    movementType?: string;
    referenceId?: string;
    note?: string;
    createdAt?: Date;
    product?: Product;
    branch?: Branch;
    user?: User;
}
//# sourceMappingURL=stock-moment.entity.d.ts.map