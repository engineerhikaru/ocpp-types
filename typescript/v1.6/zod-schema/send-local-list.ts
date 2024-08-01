import { z } from 'zod';

export const sendLocalListRequestScheme = z.object({
  listVersion: z.number().int(),
  localAuthorizationList: z
    .array(
      z.object({
        idTag: z.string().max(20),
        idTagInfo: z
          .object({
            status: z.enum(['Accepted', 'Blocked', 'Expired', 'Invalid', 'ConcurrentTx']),
            expiryDate: z.string().datetime().optional(),
            parentIdTag: z.string().max(20).optional(),
          })
          .optional(),
      })
    )
    .optional(),
  updateType: z.enum(['Differential', 'Full']),
});

export const sendLocalListResponseScheme = z.object({
  status: z.enum(['Accepted', 'Failed', 'NotSupported', 'VersionMismatch']),
});
