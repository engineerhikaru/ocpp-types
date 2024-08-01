import { z } from 'zod';

export const getConfigurationRequestScheme = z.object({
  key: z.array(z.string().max(50)).optional(),
});

export const getConfigurationResponseScheme = z.object({
  configurationKey: z
    .array(
      z.object({
        key: z.string().max(50),
        readonly: z.boolean(),
        value: z.string().max(500).optional(),
      })
    )
    .optional(),
  unknownKey: z.array(z.string().max(50)).optional(),
});
