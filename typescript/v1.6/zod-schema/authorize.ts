import { z } from 'zod';

export const authorizeRequestScheme = z.object({
  idTag: z.string().max(20),
});

export const authorizeResponseScheme = z.object({
  idTagInfo: z.object({
    status: z.enum(['Accepted', 'Blocked', 'Expired', 'Invalid', 'ConcurrentTx']),
    expiryDate: z.string().datetime().optional(),
    parentIdTag: z.string().max(20).optional(),
  }),
});
