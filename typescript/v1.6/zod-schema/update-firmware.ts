import { z } from 'zod';

export const updateFirmwareRequestScheme = z.object({
  location: z.string().url(),
  retries: z.number().optional(),
  retrieveDate: z.string().datetime(),
  retryInterval: z.number().optional(),
});

export const updateFirmwareResponseScheme = z.object({});
