export type ClearChargingProfileRequest = {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose?: 'ChargePointMaxProfile' | 'TxDefaultProfile' | 'TxProfile';
  stackLevel?: number;
};

export type ClearChargingProfileResponse = {
  status: 'Accepted' | 'Unknown';
};
