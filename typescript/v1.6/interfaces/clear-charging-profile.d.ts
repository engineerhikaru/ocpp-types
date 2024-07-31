export interface ClearChargingProfileRequest {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose?: 'ChargePointMaxProfile' | 'TxDefaultProfile' | 'TxProfile';
  stackLevel?: number;
}

export interface ClearChargingProfileResponse {
  status: 'Accepted' | 'Unknown';
}
