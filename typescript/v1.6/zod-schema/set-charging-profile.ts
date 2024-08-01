import { z } from 'zod';

export const setChargingProfileRequestScheme = z.object({
  connectorId: z.number().int(),
  csChargingProfiles: z.object({
    chargingProfileId: z.number().int(),
    transactionId: z.number().int().optional(),
    stackLevel: z.number().int(),
    chargingProfilePurpose: z.enum(['ChargePointMaxProfile', 'TxDefaultProfile', 'TxProfile']),
    chargingProfileKind: z.enum(['Absolute', 'Recurring', 'Relative']),
    recurrencyKind: z.enum(['Daily', 'Weekly']).optional(),
    validFrom: z.string().datetime().optional(),
    validTo: z.string().datetime().optional(),
    chargingSchedule: z.object({
      duration: z.number().int().optional(),
      startSchedule: z.string().datetime().optional(),
      chargingRateUnit: z.enum(['A', 'W']),
      chargingSchedulePeriod: z.array(
        z.object({
          startPeriod: z.number().int(),
          limit: z.number().multipleOf(0.1),
          numberPhases: z.number().int().optional(),
        })
      ),
      minChargingRate: z.number().multipleOf(0.1).optional(),
    }),
  }),
});

export const setChargingProfileResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected', 'NotSupported']),
});
