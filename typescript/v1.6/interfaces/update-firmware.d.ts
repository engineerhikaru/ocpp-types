export interface UpdateFirmwareRequest {
  location: string;
  retries?: number;
  retrieveDate: string;
  retryInterval?: number;
}

export interface UpdateFirmwareResponse {}
