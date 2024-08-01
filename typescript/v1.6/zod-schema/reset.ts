import { z } from 'zod';

export const resetRequestScheme = z.object({
  type: z.enum(['Hard', 'Soft']),
});

export const resetResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected']),
});
