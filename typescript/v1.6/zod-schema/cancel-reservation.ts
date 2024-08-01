import { z } from 'zod';

export const cancelReservationRequestScheme = z.object({
  reservationId: z.number().int(),
});

export const cancelReservationResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected']),
});
