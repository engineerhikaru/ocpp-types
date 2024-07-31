export interface GetConfigurationRequest {
  key?: string[];
}

export interface GetConfigurationResponse {
  configurationKey?: {
    key: string;
    readonly: boolean;
    value?: string;
  }[];
  unknownKey?: string[];
}
