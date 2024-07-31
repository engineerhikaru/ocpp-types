export type GetDiagnosticsRequest = {
  location: string;
  retries?: number;
  retryInterval?: number;
  startTime?: string;
  stopTime?: string;
};

export type GetDiagnosticsResponse = {
  fileName?: string;
};
