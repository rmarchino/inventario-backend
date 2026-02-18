import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2),
  sale_type: z.enum(["PESO", "UNIDAD"]),
  price_unit: z.number().optional(),
  price_per_kg: z.number().optional(),
});
