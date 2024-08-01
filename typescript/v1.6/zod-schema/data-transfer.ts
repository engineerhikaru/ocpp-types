import { z } from 'zod';

export const dataTransferRequestScheme = z.object({
  vendorId: z.string().max(255),
  messageId: z.string().max(50).optional(),
  data: z.string().optional(),
});

export const dataTransferResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected', 'UnknownMessageId', 'UnknownVendorId']),
  data: z.string().optional(),
});
