import { z } from 'zod';

export const getDiagnosticsRequestScheme = z.object({
  location: z.string().url(),
  retries: z.number().int().optional(),
  retryInterval: z.number().int().optional(),
  startTime: z.string().datetime().optional(),
  stopTime: z.string().datetime().optional(),
});

export const getDiagnosticsResponseScheme = z.object({
  fileName: z.string().max(255).optional(),
});
