import { z } from 'zod';

export const heartbeatRequestScheme = z.object({});

export const heartbeatResponseScheme = z.object({
  currentTime: z.string().datetime(),
});
