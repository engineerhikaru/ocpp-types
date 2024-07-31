export type ChangeConfigurationRequest = {
  key: string;
  value: string;
};

export type ChangeConfigurationResponse = {
  status: 'Accepted' | 'Rejected' | 'RebootRequired' | 'NotSupported';
};
