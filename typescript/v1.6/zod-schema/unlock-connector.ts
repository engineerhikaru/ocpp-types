import { z } from 'zod';

export const unlockConnectorRequestScheme = z.object({
  connectorId: z.number().int(),
});

export const unlockConnectorResponseScheme = z.object({
  status: z.enum(['Unlocked', 'UnlockFailed', 'NotSupported']),
});
