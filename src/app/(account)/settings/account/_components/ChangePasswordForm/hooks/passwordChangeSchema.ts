import * as z from 'zod';

export const changePasswordSchema = z.object({
	oldPassword: z.string(),
    newPassword: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    passwordConfirmation: z.string(),
});
