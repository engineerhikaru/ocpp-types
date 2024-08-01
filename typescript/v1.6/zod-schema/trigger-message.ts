import { z } from 'zod';

export const triggerMessageRequestScheme = z.object({
  requestedMessage: z.enum([
    'BootNotification',
    'DiagnosticsStatusNotification',
    'FirmwareStatusNotification',
    'Heartbeat',
    'MeterValues',
    'StatusNotification',
  ]),
  connectorId: z.number().int().optional(),
});

export const triggerMessageResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected', 'NotImplemented']),
});
