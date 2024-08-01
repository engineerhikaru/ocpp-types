import { z } from 'zod';

export const changeConfigurationRequestScheme = z.object({
  key: z.string().max(50),
  value: z.string().max(500),
});

export const changeConfigurationResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected', 'RebootRequired', 'NotSupported']),
});
