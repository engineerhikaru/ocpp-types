export type TriggerMessageRequest = {
  requestedMessage:
    | 'BootNotification'
    | 'DiagnosticsStatusNotification'
    | 'FirmwareStatusNotification'
    | 'Heartbeat'
    | 'MeterValues'
    | 'StatusNotification';
  connectorId?: number;
};

export type TriggerMessageResponse = {
  status: 'Accepted' | 'Rejected' | 'NotImplemented';
};
