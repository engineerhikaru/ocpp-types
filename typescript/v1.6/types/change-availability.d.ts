export type ChangeAvailabilityRequest = {
  connectorId: number;
  type: 'Inoperative' | 'Operative';
};

export type ChangeAvailabilityResponse = {
  status: 'Accepted' | 'Rejected' | 'Scheduled';
};
