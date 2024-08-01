import { z } from 'zod';

export const statusNotificationRequestScheme = z.object({
  connectorId: z.number().int(),
  errorCode: z.enum([
    'ConnectorLockFailure',
    'EVCommunicationError',
    'GroundFailure',
    'HighTemperature',
    'InternalError',
    'LocalListConflict',
    'NoError',
    'OtherError',
    'OverCurrentFailure',
    'PowerMeterFailure',
    'PowerSwitchFailure',
    'ReaderFailure',
    'ResetFailure',
    'UnderVoltage',
    'OverVoltage',
    'WeakSignal',
  ]),
  info: z.string().max(50).optional(),
  status: z.enum([
    'Available',
    'Preparing',
    'Charging',
    'SuspendedEVSE',
    'SuspendedEV',
    'Finishing',
    'Reserved',
    'Unavailable',
    'Faulted',
  ]),
  timestamp: z.string().datetime().optional(),
  vendorId: z.string().max(255).optional(),
  vendorErrorCode: z.string().max(50).optional(),
});

export const statusNotificationResponseScheme = z.object({});
