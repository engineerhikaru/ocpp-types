export type UnlockConnectorRequest = {
  connectorId: number;
};

export type UnlockConnectorResponse = {
  status: 'Unlocked' | 'UnlockFailed' | 'NotSupported';
};
