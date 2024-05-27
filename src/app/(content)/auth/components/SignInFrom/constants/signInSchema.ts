import * as z from 'zod';

  export const signInLoginSchema = z.object({
    email: z.string(),
    password: z.string()
  });
  