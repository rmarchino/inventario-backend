"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    sale_type: zod_1.z.enum(["PESO", "UNIDAD"]),
    price_unit: zod_1.z.number().optional(),
    price_per_kg: zod_1.z.number().optional(),
});
//# sourceMappingURL=product.schema.js.map