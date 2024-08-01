import { z } from 'zod';

export const diagnosticsStatusNotificationRequestScheme = z.object({
  status: z.enum(['Idle', 'Uploaded', 'UploadFailed', 'Uploading']),
});

export const diagnosticsStatusNotificationResponseScheme = z.object({});
