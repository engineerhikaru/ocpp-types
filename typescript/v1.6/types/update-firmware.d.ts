export type UpdateFirmwareRequest = {
  location: string;
  retries?: number;
  retrieveDate: string;
  retryInterval?: number;
};

export type UpdateFirmwareResponse = {};
