import { z } from "zod";
export declare const AuthLoginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const AuthRegisterSchema: z.ZodObject<{
    fullName: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    branchId: z.ZodOptional<z.ZodString>;
    roleId: z.ZodOptional<z.ZodString>;
    pinCode: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AuthLoginDto = z.infer<typeof AuthLoginSchema>;
export type AuthRegisterDto = z.infer<typeof AuthRegisterSchema>;
//# sourceMappingURL=auth.dto.d.ts.map