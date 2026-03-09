import { z } from "zod";

export const AuthLoginSchema = z.object({
  username: z.string().min(1, "El usuario es requerido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const AuthRegisterSchema = z.object({
  fullName: z.string().min(3, "El nombre completo es requerido"),
  username: z.string().min(3, "El usuario debe tener al menos 3 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  branchId: z.string().uuid("ID de sucursal inválido").optional(),
  roleId: z.string().uuid("ID de rol inválido").optional(),
  pinCode: z.string().length(4, "El PIN debe ser de 4 dígitos").optional(),
});

export const AuthLoginPinCodeSchema = z.object({
  pinCode: z.string().length(4, "El PIN debe tener exactamente 4 dígitos"),
});

// Tipo inferido
export type AuthLoginDto = z.infer<typeof AuthLoginSchema>;
export type AuthRegisterDto = z.infer<typeof AuthRegisterSchema>;
export type AuthLoginPinCodeDto = z.infer<typeof AuthLoginPinCodeSchema>;