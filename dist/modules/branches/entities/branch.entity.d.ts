import { User } from "../../users/entities/user.entity";
import { Product } from "../../products/entities/product.entity";
import { Sale } from "../../sales/entities/sale.entity";
export declare class Branch {
    id?: string;
    name?: string;
    address?: string;
    code?: string;
    is_active?: boolean;
    created_at?: Date;
    users?: User[];
    products?: Product[];
    sales?: Sale[];
}
//# sourceMappingURL=branch.entity.d.ts.map