export interface TriggerMessageRequest {
  requestedMessage:
    | 'BootNotification'
    | 'DiagnosticsStatusNotification'
    | 'FirmwareStatusNotification'
    | 'Heartbeat'
    | 'MeterValues'
    | 'StatusNotification';
  connectorId?: number;
}

export interface TriggerMessageResponse {
  status: 'Accepted' | 'Rejected' | 'NotImplemented';
}
