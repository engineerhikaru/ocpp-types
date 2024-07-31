export type GetConfigurationRequest = {
  key?: string[];
};

export type GetConfigurationResponse = {
  configurationKey?: {
    key: string;
    readonly: boolean;
    value?: string;
  }[];
  unknownKey?: string[];
};
