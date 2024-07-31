export interface SetChargingProfileRequest {
  connectorId: number;
  chargingProfile?: {
    chargingProfileId: number;
    transactionId?: number;
    stackLevel: number;
    chargingProfilePurpose: 'ChargePointMaxProfile' | 'TxDefaultProfile' | 'TxProfile';
    chargingProfileKind: 'Absolute' | 'Recurring' | 'Relative';
    recurrencyKind?: 'Daily' | 'Weekly';
    validFrom?: string;
    validTo?: string;
    csChargingProfiles: {
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
}

export interface SetChargingProfileResponse {
  status: 'Accepted' | 'Rejected' | 'NotSupported';
}
