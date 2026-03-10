import { z } from 'zod';

export const UpdateUserShema = z.object({
    fullName: z.string().optional(),
    username: z.string().min(3).optional(),
    branchId: z.string().uuid().optional(),
    roleId: z.string().uuid().optional(),
    pinCode: z.string().length(4).optional(),
    isActive: z.boolean().optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserShema>;