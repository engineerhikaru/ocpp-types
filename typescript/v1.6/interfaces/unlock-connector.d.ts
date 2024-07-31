export interface UnlockConnectorRequest {
  connectorId: number;
}

export interface UnlockConnectorResponse {
  status: 'Unlocked' | 'UnlockFailed' | 'NotSupported';
}
