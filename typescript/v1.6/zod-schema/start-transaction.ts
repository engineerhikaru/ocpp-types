import { z } from 'zod';

export const startTransactionRequestScheme = z.object({
  connectorId: z.number().int(),
  idTag: z.string().max(20),
  meterStart: z.number().int(),
  reservationId: z.number().int().optional(),
  timestamp: z.string().datetime(),
});

export const startTransactionResponseScheme = z.object({
  idTagInfo: z.object({
    status: z.enum(['Accepted', 'Blocked', 'Expired', 'Invalid', 'ConcurrentTx']),
    expiryDate: z.string().datetime().optional(),
    parentIdTag: z.string().max(20).optional(),
  }),
  transactionId: z.number().int(),
});
