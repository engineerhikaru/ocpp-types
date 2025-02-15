export type RemoteStartTransactionRequest = {
  connectorId?: number;
  idTag: string;
  chargingProfile?: {
    chargingProfileId: number;
    transactionId?: number;
    stackLevel: number;
    chargingProfilePurpose: 'ChargePointMaxProfile' | 'TxDefaultProfile' | 'TxProfile';
    chargingProfileKind: 'Absolute' | 'Recurring' | 'Relative';
    recurrencyKind?: 'Daily' | 'Weekly';
    validFrom?: string;
    validTo?: string;
    chargingSchedule: {
      duration?: number;
      startSchedule?: string;
      chargingRateUnit: 'A' | 'W';
      chargingSchedulePeriod: {
        startPeriod: number;
        limit: number;
        numberPhases?: number;
      }[];
      minChargingRate?: number;
    };
  };
};

export type RemoteStartTransactionResponse = {
  status: 'Accepted' | 'Rejected';
};
