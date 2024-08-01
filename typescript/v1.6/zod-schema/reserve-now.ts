import { z } from 'zod';

export const reserveNowRequestScheme = z.object({
  transactionId: z.number().int(),
  connectorId: z.number().int(),
  expiryDate: z.string().datetime(),
  idTag: z.string().max(20),
  parentIdTag: z.string().max(20).optional(),
  reservationId: z.number().int(),
});

export const reserveNowResponseScheme = z.object({
  status: z.enum(['Accepted', 'Faulted', 'Occupied', 'Rejected', 'Unavailable']),
});
