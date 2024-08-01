import { z } from 'zod';

export const getLocalListVersionRequestScheme = z.object({});

export const getLocalListVersionResponseScheme = z.object({
  listVersion: z.number().int(),
});
