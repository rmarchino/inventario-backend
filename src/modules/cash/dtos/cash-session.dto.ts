import { z } from "zod";

// DTO para la apertura de caja
export const OpenCashSessionSchema = z.object({
  openingAmount: z.number().min(0, "El monto de apertura debe ser un número positivo"),
  notes: z.string().optional(),
});

export type OpenCashSessionDto = z.infer<typeof OpenCashSessionSchema>;
