export type ReserveNowRequest = {
  connectorId: number;
  expiryDate: string;
  idTag: string;
  parentIdTag?: string;
  reservationId: number;
};

export type ReserveNowResponse = {
  status: 'Accepted' | 'Faulted' | 'Occupied' | 'Rejected' | 'Unavailable';
};
