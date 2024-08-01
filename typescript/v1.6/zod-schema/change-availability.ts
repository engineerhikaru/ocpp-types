import { z } from 'zod';

export const changeAvailabilityRequestScheme = z.object({
  connectorId: z.number().int(),
  type: z.enum(['Inoperative', 'Operative']),
});

export const changeAvailabilityResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected', 'Scheduled']),
});
