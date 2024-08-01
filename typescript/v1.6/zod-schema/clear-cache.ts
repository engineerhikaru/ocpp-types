import { z } from 'zod';

export const clearCacheRequestScheme = z.object({});

export const clearCacheResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected']),
});
