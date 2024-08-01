import { z } from 'zod';

export const remoteStopTransactionRequestScheme = z.object({
  transactionId: z.number().int(),
});

export const remoteStopTransactionResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected']),
});
