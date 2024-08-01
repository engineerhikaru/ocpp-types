import { z } from 'zod';

export const bootNotificationRequestScheme = z.object({
  chargePointVendor: z.string().max(20),
  chargePointModel: z.string().max(20),
  chargePointSerialNumber: z.string().max(25).optional(),
  chargeBoxSerialNumber: z.string().max(25).optional(),
  firmwareVersion: z.string().max(50).optional(),
  iccid: z.string().max(20).optional(),
  imsi: z.string().max(20).optional(),
  meterType: z.string().max(25).optional(),
  meterSerialNumber: z.string().max(25).optional(),
});

export const bootNotificationResponseScheme = z.object({
  status: z.enum(['Accepted', 'Pending', 'Rejected']),
  currentTime: z.string().datetime(),
  interval: z.number(),
});
