import { z } from "zod";

// Schema para Login
export const AuthLoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
});

// Schema para Registro
export const AuthRegisterSchema = z.object({
  fullName: z.string().min(3, "El nombre completo es requerido"),
  username: z.string().min(3, "El usuario debe tener al menos 3 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),

  // Opcionales por ahora, para permitir crear el primer SuperAdmin sin sucursal si fuera necesario
  branchId: z.string().uuid("ID de sucursal inválido").optional(),
  roleId: z.string().uuid("ID de rol inválido").optional(),

  pinCode: z.string().length(4).optional(),
});

// 

// Tipo inferido
export type AuthLoginDto = z.infer<typeof AuthLoginSchema>;
export type AuthRegisterDto = z.infer<typeof AuthRegisterSchema>;