export interface GetDiagnosticsRequest {
  location: string;
  retries?: number;
  retryInterval?: number;
  startTime?: string;
  stopTime?: string;
}

export interface GetDiagnosticsResponse {
  fileName?: string;
}
