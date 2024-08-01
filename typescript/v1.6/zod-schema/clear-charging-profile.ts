import { z } from 'zod';

export const clearChargingProfileRequestScheme = z.object({
  id: z.number().int().optional(),
  connectorId: z.number().int().optional(),
  chargingProfilePurpose: z.enum(['ChargePointMaxProfile', 'TxDefaultProfile', 'TxProfile']).optional(),
  stackLevel: z.number().int().optional(),
});

export const clearChargingProfileResponseScheme = z.object({
  status: z.enum(['Accepted', 'Unknown']),
});
