import * as z from 'zod';

export const changeEmailSchema = z.object({
    password: z.string(),
    newEmail:z.string().email({message:"Enter valid Emal"})
})
