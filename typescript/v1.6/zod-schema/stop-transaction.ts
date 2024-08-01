import { z } from 'zod';

export const stopTransactionRequestScheme = z.object({
  idTag: z.string().max(20).optional(),
  meterStop: z.number().int(),
  timestamp: z.string().datetime(),
  transactionId: z.number().int(),
  reason: z
    .enum([
      'EmergencyStop',
      'EVDisconnected',
      'HardReset',
      'Local',
      'Other',
      'PowerLoss',
      'Reboot',
      'Remote',
      'SoftReset',
      'UnlockCommand',
      'DeAuthorized',
    ])
    .optional(),
  transactionData: z
    .array(
      z.object({
        timestamp: z.string().datetime(),
        sampledValue: z.array(
          z.object({
            value: z.string(),
            context: z
              .enum([
                'Interruption.Begin',
                'Interruption.End',
                'Sample.Clock',
                'Sample.Periodic',
                'Transaction.Begin',
                'Transaction.End',
                'Trigger',
                'Other',
              ])
              .optional(),
            format: z.enum(['Raw', 'SignedData']).optional(),
            measurand: z
              .enum([
                'Energy.Active.Export.Register',
                'Energy.Active.Import.Register',
                'Energy.Reactive.Export.Register',
                'Energy.Reactive.Import.Register',
                'Energy.Active.Export.Interval',
                'Energy.Active.Import.Interval',
                'Energy.Reactive.Export.Interval',
                'Energy.Reactive.Import.Interval',
                'Power.Active.Export',
                'Power.Active.Import',
                'Power.Offered',
                'Power.Reactive.Export',
                'Power.Reactive.Import',
                'Power.Factor',
                'Current.Import',
                'Current.Export',
                'Current.Offered',
                'Voltage',
                'Frequency',
                'Temperature',
                'SoC',
                'RPM',
              ])
              .optional(),
            phase: z.enum(['L1', 'L2', 'L3', 'N', 'L1-N', 'L2-N', 'L3-N', 'L1-L2', 'L2-L3', 'L3-L1']).optional(),
            location: z.enum(['Cable', 'EV', 'Inlet', 'Outlet', 'Body']).optional(),
            unit: z
              .enum([
                'Wh',
                'kWh',
                'varh',
                'kvarh',
                'W',
                'kW',
                'VA',
                'kVA',
                'var',
                'kvar',
                'A',
                'V',
                'K',
                'Celcius',
                'Celsius',
                'Fahrenheit',
                'Percent',
              ])
              .optional(),
          })
        ),
      })
    )
    .optional(),
});

export const stopTransactionResponseScheme = z.object({
  idTagInfo: z
    .object({
      status: z.enum(['Accepted', 'Blocked', 'Expired', 'Invalid', 'ConcurrentTx']),
      expiryDate: z.string().datetime().optional(),
      parentIdTag: z.string().max(20).optional(),
    })
    .optional(),
});
