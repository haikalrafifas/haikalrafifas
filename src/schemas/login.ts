import { z } from 'zod';

export const body = z.object({
  // email: z.string().email({ message: 'Invalid email address' }),
  nim: z.string().min(10, { message: 'NIM must be at least 10 characters' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export type Login = z.infer<typeof body>;
