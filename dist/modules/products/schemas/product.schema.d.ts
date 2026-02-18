import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    sale_type: z.ZodEnum<{
        PESO: "PESO";
        UNIDAD: "UNIDAD";
    }>;
    price_unit: z.ZodOptional<z.ZodNumber>;
    price_per_kg: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=product.schema.d.ts.map