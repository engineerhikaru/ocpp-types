import { z } from 'zod';

export const getCompositeScheduleRequestScheme = z.object({
  connectorId: z.number().int(),
  duration: z.number().int(),
  chargingRateUnit: z.enum(['A', 'W']).optional(),
});

export const getCompositeScheduleResponseScheme = z.object({
  status: z.enum(['Accepted', 'Rejected']),
  connectorId: z.number().int().optional(),
  scheduleStart: z.string().datetime().optional(),
  chargingSchedule: z
    .object({
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
    })
    .optional(),
});
