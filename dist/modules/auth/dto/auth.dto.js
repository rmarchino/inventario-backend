"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRegisterSchema = exports.AuthLoginSchema = void 0;
const zod_1 = require("zod");
// Schema para Login
exports.AuthLoginSchema = zod_1.z.object({
    username: zod_1.z.string().min(1),
    password: zod_1.z.string().min(6),
});
// Schema para Registro
exports.AuthRegisterSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(3, "El nombre completo es requerido"),
    username: zod_1.z.string().min(3, "El usuario debe tener al menos 3 caracteres"),
    password: zod_1.z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    // Opcionales por ahora, para permitir crear el primer SuperAdmin sin sucursal si fuera necesario
    branchId: zod_1.z.string().uuid("ID de sucursal inválido").optional(),
    roleId: zod_1.z.string().uuid("ID de rol inválido").optional(),
    pinCode: zod_1.z.string().length(4).optional(),
});
//# sourceMappingURL=auth.dto.js.map