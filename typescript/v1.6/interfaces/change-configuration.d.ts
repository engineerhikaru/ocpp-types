export interface ChangeConfigurationRequest {
  key: string;
  value: string;
}

export interface ChangeConfigurationResponse {
  status: 'Accepted' | 'Rejected' | 'RebootRequired' | 'NotSupported';
}
