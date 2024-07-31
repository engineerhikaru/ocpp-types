export interface ChangeAvailabilityRequest {
  connectorId: number;
  type: 'Inoperative' | 'Operative';
}

export interface ChangeAvailabilityResponse {
  status: 'Accepted' | 'Rejected' | 'Scheduled';
}
