export interface ReserveNowRequest {
  connectorId: number;
  expiryDate: string;
  idTag: string;
  parentIdTag?: string;
  reservationId: number;
}

export interface ReserveNowResponse {
  status: 'Accepted' | 'Faulted' | 'Occupied' | 'Rejected' | 'Unavailable';
}
